export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Loading Tasks...</h1>
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}