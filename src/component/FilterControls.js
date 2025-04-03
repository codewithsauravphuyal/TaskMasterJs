'use client';

import { useTasks } from '../context/TaskContext';

const FilterControls = () => {
  const { filter, setFilter } = useTasks();


  return (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={() => setFilter('All')}
        className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
          filter === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('Pending')}
        className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
          filter === 'Pending' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => setFilter('Completed')}
        className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
          filter === 'Completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterControls;