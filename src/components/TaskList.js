'use client';

import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = ({ onRequestDelete }) => {
  const { tasks, filter } = useTasks();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter tasks based on the current filter and search term
  const filteredTasks = tasks.filter(task => {
    // First apply status filter
    let statusMatch = true;
    if (filter === 'All') statusMatch = true;
    else if (filter === 'Completed') statusMatch = task.completed;
    else statusMatch = !task.completed;

    // Then apply search filter
    const searchMatch = searchTerm === '' || 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()));

    return statusMatch && searchMatch;
  });

  // Show an accessible empty state if no tasks match
  if (filteredTasks.length === 0) {
    return (
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
            aria-label="Search tasks"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Empty State */}
        <div className="text-center py-12" role="status" aria-live="polite">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {searchTerm 
              ? `No tasks found for "${searchTerm}"`
              : filter === 'All'
                ? 'No tasks yet'
                : `No ${filter.toLowerCase()} tasks`
            }
          </h3>
          <p className="text-gray-500">
            {searchTerm 
              ? 'Try adjusting your search terms'
              : filter === 'All'
                ? 'Add your first task to get started!'
                : 'Tasks will appear here when you add them'
            }
          </p>
        </div>
      </div>
    );
  }

  // Render the list of tasks with ARIA role and search functionality
  return (
    <div className="space-y-4" role="list" aria-label="Task List">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
          aria-label="Search tasks"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Results Count */}
      {searchTerm && (
        <div className="text-sm text-gray-500 px-1">
          Found {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''} for "{searchTerm}"
        </div>
      )}

      {/* Task Items */}
      <div className="space-y-3">
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} onRequestDelete={onRequestDelete} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;