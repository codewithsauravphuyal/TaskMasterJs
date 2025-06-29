'use client';

import { useTasks } from '../context/TaskContext';

const FilterControls = () => {
  const { filter, setFilter } = useTasks();

  // Handle filter change with accessibility
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div 
      className="flex space-x-4 mb-6" 
      role="group" 
      aria-label="Filter tasks by status"
    >
      <button
        onClick={() => handleFilterChange('All')}
        aria-pressed={filter === 'All'}
        aria-label="Show all tasks"
        className={`px-4 py-2 rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          filter === 'All' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-sm'
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange('Pending')}
        aria-pressed={filter === 'Pending'}
        aria-label="Show pending tasks only"
        className={`px-4 py-2 rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          filter === 'Pending' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-sm'
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => handleFilterChange('Completed')}
        aria-pressed={filter === 'Completed'}
        aria-label="Show completed tasks only"
        className={`px-4 py-2 rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          filter === 'Completed' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-sm'
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterControls;
