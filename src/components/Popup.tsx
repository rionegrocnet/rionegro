import React from 'react';
import { motion } from 'framer-motion';
import { PopupContent } from '../../types/types';

interface PopupProps extends PopupContent {
  x: number;
  y: number;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ number, text, x, y, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute bg-white p-4 rounded-lg shadow-lg"
      style={{ left: x, top: y, maxWidth: '300px', transform: 'translate(-50%, -100%)' }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-bold">{number}</span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </div>
      <p>{text}</p>
    </motion.div>
  );
};

export default Popup;

