/* eslint-disable react/prop-types */
const AlertModal = ({ isOpen, onClose, message, onProceed }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          aria-hidden='true'
        ></div>
        <div className='relative bg-white rounded-lg p-8 m-5'>
          <div className='flex flex-col items-center justify-center text-primary space-y-4 text-center'>
            <h3 className='text-lg font-semibold'>{message}</h3>
            <div className='flex space-x-4'>
              <button
                onClick={onProceed}
                className='py-2 px-4 bg-primary text-neutral rounded hover:opacity-95'
              >
                Continue
              </button>
              <button
                onClick={onClose}
                className='py-2 px-4 bg-red-600 text-neutral rounded hover:opacity-95'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
