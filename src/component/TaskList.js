'use client';

import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, filter } = useTasks();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return task.completed;
    return !task.completed;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        {filter === 'All'
          ? 'No tasks yet. Add one to get started!'
          : `No ${filter.toLowerCase()} tasks.`}
      </div>
    );
  }

  return (
    <div className="space-y-3 px-4 sm:px-6 md:px-8">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;