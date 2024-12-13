'use client'

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MapSVG from './MapSVG';
import MapPoint from './MapPoint';
import Popup from './Popup';
import { Point, PopupContent } from '../../types/types';

const points: Point[] = [
  { id: 'point01', cx: 2360.37, cy: 141.39, number: 1 },
  { id: 'point02', cx: 2232.26, cy: 104.55, number: 2 },
  { id: 'point03', cx: 2092.35, cy: 94.7, number: 3 },
  { id: 'point04', cx: 2278.99, cy: 375.18, number: 4 },
  { id: 'point05', cx: 1914.45, cy: 1186.93, number: 5 },
  { id: 'point06', cx: 2021.92, cy: 1254.25, number: 6 },
  { id: 'point07', cx: 2116.99, cy: 1224.89, number: 7 },
  { id: 'point08', cx: 2191.83, cy: 1123.45, number: 8 },
  { id: 'point09', cx: 2307.28, cy: 1095.34, number: 9 },
  { id: 'point10', cx: 2301.97, cy: 1357.69, number: 10 },
  { id: 'point11', cx: 2175.22, cy: 585.02, number: 11 },
  { id: 'point12', cx: 336.06, cy: 431.66, number: 12 },
  { id: 'point13', cx: 1236.08, cy: 1392.3, number: 13 },
];

const Map: React.FC = () => {
  const [activePopup, setActivePopup] = useState<PopupContent | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handlePointClick = (point: Point) => {
    setActivePopup({
      number: point.number,
      text: '.',
    });
    setPopupPosition({ x: point.cx, y: point.cy });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden z-[100]">
      <div className="absolute inset-0">
        <MapSVG />
      </div>
      <svg className="absolute inset-0" viewBox="0 0 3000 2000" preserveAspectRatio="xMidYMid meet">
        {points.map((point) => (
          <MapPoint
            key={point.id}
            {...point}
            onClick={() => handlePointClick(point)}
          />
        ))}
      </svg>
      <AnimatePresence>
        {activePopup && (
          <Popup
            {...activePopup}
            x={popupPosition.x}
            y={popupPosition.y}
            onClose={() => setActivePopup(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Map;

