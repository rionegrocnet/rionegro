"use client";

import { useState, useEffect } from 'react';
import { Map } from 'lucide-react';

export function MapHelpMessage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleInteraction = () => {
      setIsVisible(false);
    };

    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('mousedown', handleInteraction);

    return () => {
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mousedown', handleInteraction);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="mx-auto mt-4 bg-[#004141] text-[#fefaf1] px-8 py-3 rounded-xl shadow-lg flex items-center gap-3 max-w-[280px]">
      <Map className="w-4 h-4 shrink-0" />
      <p className="text-xs font-medium">
        Navega por el mapa para descubrir puntos de interés
      </p>
    </div>
  );
}