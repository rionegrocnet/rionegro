import React from 'react';
import { motion } from 'framer-motion';
import { Point } from '../../types/types';

interface MapPointProps extends Point {
  onClick: () => void;
}

const MapPoint: React.FC<MapPointProps> = ({ id, cx, cy, number, onClick }) => {
  return (
    <motion.g
      id={id}
      whileHover={{ scale: 1.5 }}  // Aumentamos la escala de 1.2 a 1.5
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <motion.circle
        className="fill-blue-500"
        cx={cx}
        cy={cy}
        r="29.49"
        initial={{ r: 29.49 }}
        whileHover={{ r: 44 }}  // Aumentamos el radio de 35 a 44
      />
      <rect
        className="fill-blue-500"
        x={cx - 1.23}
        y={cy + 29.49}
        width="2.46"
        height="34.41"
      />
      <text
        className="fill-white text-2xl font-bold"
        x={cx}
        y={cy + 8}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {number}
      </text>
    </motion.g>
  );
};

export default MapPoint;

