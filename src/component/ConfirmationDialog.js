'use client';

const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-white-800 to-blue-950 bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out opacity-100">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-lg transform transition-all duration-300 scale-100 hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-700">{message}</p>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none transition-colors duration-200 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;