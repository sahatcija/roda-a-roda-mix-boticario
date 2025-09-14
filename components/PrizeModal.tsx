
import React from 'react';
import type { Prize } from '../types';
import BoticarioLogo from './BoticarioLogo';

interface PrizeModalProps {
  prize: Prize;
  onClose: () => void;
}

const PrizeModal: React.FC<PrizeModalProps> = ({ prize, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative transform transition-transform duration-300 scale-100 animate-modal-enter">
        <BoticarioLogo className="h-12 w-auto mx-auto mb-4 text-green-800" />
        <h2 className="text-3xl font-black text-green-800 mb-2">PARABÉNS!</h2>
        <p className="text-lg text-gray-600 mb-4">Você ganhou:</p>
        <div className="bg-green-100 border-2 border-dashed border-green-400 rounded-lg p-6 mb-6">
          <p className="text-4xl font-bold text-green-700" style={{ color: prize.color }}>
            {prize.text}
          </p>
        </div>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-green-700 text-white font-bold text-lg rounded-full shadow-md hover:bg-green-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
        >
          FECHAR
        </button>
      </div>
      <style>{`
        @keyframes modal-enter {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-enter {
          animation: modal-enter 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PrizeModal;
