'use client'

export default function ErrorBoundary({
  error,
  reset,
}) {
  return (
    <div className="max-w-2xl mx-auto p-4 text-red-600">
      <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-red-100 rounded hover:bg-red-200"
      >
        Try again
      </button>
    </div>
  )
}