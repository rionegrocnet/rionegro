"use client";

import { MapPoint } from './MapPoint';
import { BaseMap } from './BaseMap';
import { ZoomControls } from './ZoomControls';
import { MapHelpMessage } from './MapHelpMessage';
import { useMapZoom } from '@/hooks/useMapZoom';
import { christmasScenarios } from '@/lib/data/scenarios';
import '@/styles/map.css';

export function MobileMap() {
  const { zoom, position, zoomIn, zoomOut, canZoomOut, handleDrag } = useMapZoom();

  return (
    <div className="h-screen w-screen flex items-center justify-center md:hidden bg-[#FFECC3]" style={{ zIndex: 100, position: 'relative' }}>
      <div 
        className="w-full h-full relative overflow-hidden touch-pan-x touch-pan-y"
        onTouchMove={handleDrag}
      >
        <MapHelpMessage />
        <div 
          className="w-full h-full transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: 'center center'
          }}
        >
          <svg
            viewBox="0 0 3262.05 1714.95"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <BaseMap />
            {christmasScenarios.map((scenario, index) => (
              <MapPoint
                key={scenario.id}
                id={scenario.id}
                cx={scenario.location.cx}
                cy={scenario.location.cy}
                number={index + 1}
                title={scenario.title}
                description={scenario.description}
              />
            ))}
          </svg>
        </div>
        <ZoomControls 
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          canZoomOut={canZoomOut}
        />
      </div>
    </div>
  );
}