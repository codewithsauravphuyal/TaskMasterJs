'use client';

const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  taskTitle = null, // Optional: pass the task title for more specific confirmation
}) => {
  // Handle escape key to close dialog
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  // Handle backdrop click to close dialog
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all duration-300 ease-in-out"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-message"
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100 border border-gray-200/50">
        {/* Warning Icon */}
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        <h3 id="dialog-title" className="text-2xl font-bold text-gray-900 mb-4 text-center">
          {title}
        </h3>
        
        <div id="dialog-message" className="text-gray-700 mb-8 text-center">
          <p className="mb-3">{message}</p>
          {taskTitle && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Task to be deleted:</p>
              <p className="font-semibold text-gray-900">"{taskTitle}"</p>
            </div>
          )}
          <p className="text-sm text-gray-500 mt-4">
            This action cannot be undone.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onClose}
            aria-label="Cancel deletion"
            className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            aria-label="Confirm deletion"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;