"use client";

import { useState, useCallback } from 'react';

const MIN_ZOOM = 3;
const MAX_ZOOM = 4.5;
const ZOOM_STEP = 0.5;

export function useMapZoom() {
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const zoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  }, []);

  const canZoomOut = zoom > MIN_ZOOM;

  const handleDrag = useCallback((e: React.TouchEvent) => {
    if (zoom > MIN_ZOOM) {
      const touch = e.touches[0];
      setPosition(prev => ({
        x: prev.x + touch.clientX,
        y: prev.y + touch.clientY
      }));
    }
  }, [zoom]);

  return {
    zoom,
    position,
    zoomIn,
    zoomOut,
    canZoomOut,
    handleDrag
  };
}