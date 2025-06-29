'use client';

import { useTasks } from '../context/TaskContext';
import { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

const priorityColors = {
  High: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md',
  Medium: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md',
  Low: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md',
};

const TaskItem = ({ task, onRequestDelete }) => {
  const { updateTask } = useTasks();

  // Toggle completion status
  const handleToggleComplete = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  return (
    <div
      className={`group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 mb-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 focus-within:shadow-lg focus-within:shadow-blue-500/20 ${
        task.completed ? 'bg-gray-50/80 opacity-75' : 'hover:bg-white/90'
      }`}
      tabIndex={0}
      role="listitem"
      aria-label={`Task: ${task.title}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3 flex-1">
          <div className="relative">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggleComplete}
              aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
              className="h-5 w-5 rounded-md border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-all duration-200 hover:border-blue-400"
            />
            {task.completed && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          <h3
            className={`text-lg font-semibold transition-all duration-200 ${
              task.completed ? 'line-through text-gray-500' : 'text-gray-900'
            }`}
          >
            {task.title}
          </h3>
        </div>
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${priorityColors[task.priority]}`}
          aria-label={`Priority: ${task.priority}`}
        >
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="text-gray-600 mb-4 leading-relaxed">{task.description}</p>
      )}

      <div className="pt-4 border-t border-gray-200/50 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-gray-500 font-medium">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>
        <button
          onClick={() => onRequestDelete(task)}
          aria-label={`Delete task: ${task.title}`}
          className="flex items-center space-x-1 text-red-500 hover:text-red-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-red-50 hover:shadow-sm group-hover:bg-red-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;