import { useEffect, useRef } from 'react';
import { ConfirmType } from './ConfirmType';

const CustomConfirm = ({ title, message, onClickOK, onClickCancel }: ConfirmType) => {
  const okButtonRef = useRef<HTMLButtonElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClickCancel();
      }
      if (e.key === 'ArrowLeft') {
        okButtonRef.current?.focus();
      }
      if (e.key === 'ArrowRight') {
        cancelButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [onClickCancel]);

  return (
    <div className="z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClickCapture={(e) => e.stopPropagation()}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-lg font-bold mb-4 border-b pb-2 font-['passero-one']">{title}</h2>
        <div className="mb-5 text-gray-600 font-bold text-lg font-['passero-one']">{message}</div>
        <div className="mt-5 flex justify-end space-x-2">
          <button ref={okButtonRef} onClick={onClickOK} className="py-2 px-4 bg-blue-500 text-white rounded focus:ring focus:ring-blue-400 focus:ring-opacity-50">
            OK
          </button>
          <button ref={cancelButtonRef} onClick={onClickCancel} className="py-2 px-4 bg-gray-200 text-gray-700 rounded focus:ring focus:ring-gray-400 focus:ring-opacity-50" autoFocus>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomConfirm;
