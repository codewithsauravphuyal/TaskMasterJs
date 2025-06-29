'use client';
import TaskForm from '@/src/components/TaskForm'
import TaskList from '@/src/components/TaskList'
import FilterControls from '@/src/components/FilterControls'
import ConfirmationDialog from '@/src/components/ConfirmationDialog'
import Link from 'next/link'
import { useState } from 'react'
import { useTasks } from '@/src/context/TaskContext'

export default function TasksPage() {
  const { deleteTask } = useTasks();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Handler to open dialog from TaskItem
  const handleRequestDelete = (task) => {
    setTaskToDelete(task);
    setDeleteDialogOpen(true);
  };

  // Handler to confirm deletion
  const handleConfirmDelete = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete.id);
    }
    setDeleteDialogOpen(false);
    setTaskToDelete(null);
  };

  // Handler to close dialog
  const handleCloseDialog = () => {
    setDeleteDialogOpen(false);
    setTaskToDelete(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Professional Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">TaskFlow</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Home
              </Link>
              <span className="text-blue-600 font-medium">Tasks</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Task Manager
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline your workflow with our intuitive task management system
            </p>
          </div>

          {/* Main Dashboard */}
          <div className="bg-white/70 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
              {/* Task Form Section */}
              <div className="p-8 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border-r border-gray-200/50">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    Create New Task
                  </h3>
                  <p className="text-gray-600">
                    Add tasks with priorities and due dates to stay organized
                  </p>
                </div>
                <TaskForm />
              </div>

              {/* Task List Section */}
              <div className="p-8 bg-white/50">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0 lg:space-x-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-2">
                      <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      Your Tasks
                    </h3>
                    <p className="text-gray-600">Manage and track your current workload</p>
                  </div>
                  <div className="w-full lg:w-auto">
                    <FilterControls />
                  </div>
                </div>
                <div className="border-t border-gray-200/50 pt-6">
                  <TaskList onRequestDelete={handleRequestDelete} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Global Delete Confirmation Dialog */}
        <ConfirmationDialog
          isOpen={deleteDialogOpen}
          onClose={handleCloseDialog}
          onConfirm={handleConfirmDelete}
          title="Delete Task"
          message="Are you sure you want to delete this task?"
          taskTitle={taskToDelete?.title}
        />
      </main>

      {/* Professional Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} TaskFlow. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}