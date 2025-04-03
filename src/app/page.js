import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      <div className="bg-blue-600 p-10 text-center">
        <h1 className="text-3xl sm:text-6xl font-extrabold text-white">
          Task Management System
        </h1>
        <p className="mt-3 text-xl text-blue-100">
          Developed for Hunchha Digital Internship Program
        </p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="p-10 sm:p-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Welcome to Your Productivity Hub
            </h2>
            <p className="text-lg text-gray-600">
              A Next.js application demonstrating modern web development practices
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-md">
              <h3 className="font-medium text-blue-800 mb-4 text-xl">Task Management</h3>
              <p className="text-sm text-gray-600">
                Create, organize, and prioritize your tasks efficiently
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-md">
              <h3 className="font-medium text-blue-800 mb-4 text-xl">Advanced Filtering</h3>
              <p className="text-sm text-gray-600">
                View tasks by status: All, Completed, or Pending
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-md">
              <h3 className="font-medium text-blue-800 mb-4 text-xl">Collaborative Features</h3>
              <p className="text-sm text-gray-600">
                Work together with team members, assign tasks, and track progress
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/client/tasks"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
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
    </main>
  )
}