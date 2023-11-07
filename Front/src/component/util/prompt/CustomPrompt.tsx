import { useEffect } from 'react';
import { PromptType } from './PromptType';

const CustomPrompt = ({ title, message, _default, onClickOK, onClickCancel }: PromptType) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClickCancel();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClickCancel]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      input: { value: string };
    };
    onClickOK(target.input.value);
  };

  return (
    <div className="z-50" style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_small.png'), auto` }}>
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClickCapture={(e) => e.stopPropagation()}></div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white rounded-lg shadow-xl border border-gray-200" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4 border-b pb-2 font-['passero-one']">{title}</h2>
        <div className="mb-5 text-gray-600 font-bold text-lg font-['passero-one']">{message}</div>
        <input
          id="input"
          style={{ cursor: `url('https://b305finalproject.s3.ap-northeast-2.amazonaws.com/MousePointer/navigation_small.png'), auto` }}
          className="w-full px-3 py-2 mb-5 border-2 border-gray-300 rounded-lg focus:border-blue-500 transition-colors"
          type="text"
          defaultValue={_default}
          autoFocus
        />
        <div className="mt-6 flex justify-end space-x-2">
          <button style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }} className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-colors" type="submit">
            OK
          </button>
          <button style={{ cursor: `url('${import.meta.env.VITE_S3_URL}MousePointer/navigation_hover_small.png'), auto` }} onClick={onClickCancel} className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:ring focus:ring-gray-300 focus:ring-opacity-50 transition-colors" type="reset">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomPrompt;
