import { useEffect } from 'react';
import { AlertType } from './AlertType';

const CustomAlert = ({ title, message, onClose }: AlertType) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClickCapture={(e) => e.stopPropagation()}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">{title}</h2>
        <div className="mb-5 text-gray-600 font-bold text-lg">{message}</div>
        <div className="mt-6 flex justify-end space-x-2">
          <button onClick={onClose} className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-colors" autoFocus>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
