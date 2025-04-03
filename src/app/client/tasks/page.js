import TaskForm from '@/src/component/TaskForm'
import TaskList from '@/src/component/TaskList'
import FilterControls from '@/src/component/FilterControls'

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Task Manager
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Organize your work and boost productivity
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add New Task
                </h2>
                <p className="text-gray-600 mt-1">
                  Create and prioritize your tasks
                </p>
              </div>
              <TaskForm />
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto h-[calc(100vh-250px)]">
              <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center lg:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Your Tasks
                  </h2>
                  <p className="text-gray-600 mt-1">Manage your current workload</p>
                </div>
                <div className="w-full lg:w-auto">
                  <FilterControls />
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <TaskList />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Hunchha Digital Internship Project
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}