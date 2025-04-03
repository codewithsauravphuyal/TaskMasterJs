'use client';

import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTasks();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium'
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.dueDate) newErrors.dueDate = 'Due date is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addTask(formData);
      setFormData({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Medium'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 px-4 sm:px-6 md:px-8">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title *
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className={`block w-full rounded-lg border px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter task title"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
          rows={4}
          placeholder="Enter task description (optional)"
        />
      </div>

      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
          Due Date *
        </label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          className={`block w-full rounded-lg border px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black ${
            errors.dueDate ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.dueDate && (
          <p className="mt-1 text-sm text-red-600">{errors.dueDate}</p>
        )}
      </div>

      <div>
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;