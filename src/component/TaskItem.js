'use client';

import { useTasks } from '../context/TaskContext';
import { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

const priorityColors = {
  High: 'bg-red-100 text-red-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Low: 'bg-green-100 text-green-800',
};

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask } = useTasks();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleToggleComplete = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task.id);
    setShowDeleteDialog(false);
  };

  return (
    <div
      className={`border rounded-lg p-4 mb-2 ${
        task.completed ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <h3
            className={`text-lg font-medium ${
              task.completed ? 'line-through text-gray-500' : 'text-gray-900'
            }`}
          >
            {task.title}
          </h3>
        </div>
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="mt-2 text-gray-600">{task.description}</p>
      )}

      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
        <button
          onClick={() => setShowDeleteDialog(true)}
          className="text-red-600 hover:text-red-900 text-sm font-medium"
        >
          Delete
        </button>
      </div>

      <ConfirmationDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDelete}
        title="Delete Task"
        message="Are you sure you want to delete this task?"
      />
    </div>
  );
};

export default TaskItem;