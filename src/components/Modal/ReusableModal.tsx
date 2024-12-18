import React, { ReactNode } from 'react';
import Button from '../Button/Button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode; // Conteúdo dinâmico dentro do modal
};

const ReusableModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">{title || 'Título do Modal'}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fechar modal"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto max-h-[70vh]">{children}</div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-gray-200">

        <Button
        label='Fechar'
        className=''
        onBtnClick={onClose}
        />
        </div>
      </div>
    </div>
  );
};

export default ReusableModal;