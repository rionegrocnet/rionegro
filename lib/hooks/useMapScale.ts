"use client";

import { MAP_CONSTANTS } from '@/lib/constants/map';

export function useMapScale() {
  const getTransform = (x: number = 0) => {
    return `scale(${MAP_CONSTANTS.ZOOM.INITIAL.MOBILE}) translateX(${x}px)`;
  };

  return {
    getTransform
  };
}