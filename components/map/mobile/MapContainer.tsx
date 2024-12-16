"use client";

import { useMapPanning } from '@/hooks/useMapPanning';
import { useMapScale } from '@/lib/hooks/useMapScale';

interface MapContainerProps {
  children: React.ReactNode;
}

export function MapContainer({ children }: MapContainerProps) {
  const { position, handleDrag, handleTouchEnd } = useMapPanning();
  const { getTransform } = useMapScale();

  return (
    <div 
      className="w-full h-full relative touch-pan-x"
      onTouchMove={handleDrag}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="w-full h-full transition-transform duration-200 ease-out"
        style={{
          transform: getTransform(position.x),
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  );
}