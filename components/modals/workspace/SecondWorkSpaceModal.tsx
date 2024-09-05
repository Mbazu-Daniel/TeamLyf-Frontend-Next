import React from 'react';

interface SecondModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SecondModal: React.FC<SecondModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold">Second Modal</h2>
        <p>This is the content of the second modal.</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white p-2 rounded"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default SecondModal;
