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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      addTask(formData);
      setFormData({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Medium'
      });
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Add Task Form">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 animate-in slide-in-from-top-2">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-green-800 font-medium">Task added successfully!</p>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
          Task Title *
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          aria-label="Task Title"
          aria-required="true"
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? 'title-error' : undefined}
          className={`block w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black transition-all duration-200 ${
            errors.title ? 'border-red-500 shadow-sm shadow-red-100' : 'border-gray-300 hover:border-gray-400'
          }`}
          placeholder="Enter task title"
          disabled={isSubmitting}
        />
        {errors.title && (
          <p id="title-error" className="mt-2 text-sm text-red-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.title}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
          Description
        </label>
        <div className="relative">
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            aria-label="Task Description"
            className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black transition-all duration-200 hover:border-gray-400"
            rows={4}
            placeholder="Enter task description (optional)"
            disabled={isSubmitting}
            maxLength={500}
          />
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">
            {formData.description.length}/500
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="dueDate" className="block text-sm font-semibold text-gray-700 mb-2">
            Due Date *
          </label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            aria-label="Due Date"
            aria-required="true"
            aria-invalid={!!errors.dueDate}
            aria-describedby={errors.dueDate ? 'dueDate-error' : undefined}
            className={`block w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black transition-all duration-200 ${
              errors.dueDate ? 'border-red-500 shadow-sm shadow-red-100' : 'border-gray-300 hover:border-gray-400'
            }`}
            disabled={isSubmitting}
          />
          {errors.dueDate && (
            <p id="dueDate-error" className="mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.dueDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-semibold text-gray-700 mb-2">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            aria-label="Task Priority"
            className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black transition-all duration-200 hover:border-gray-400"
            disabled={isSubmitting}
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-label="Add Task"
        className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Adding Task...
          </div>
        ) : (
          'Add Task'
        )}
      </button>
    </form>
  );
};

export default TaskForm;