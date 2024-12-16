"use client";

import { Map } from 'lucide-react';

export function MapHelpMessage() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#004141] text-[#fefaf1] px-8 py-4 rounded-xl shadow-lg z-50 flex items-center gap-3 min-w-[280px]">
      <Map className="w-5 h-5 flex-shrink-0" />
      <p className="text-sm font-medium">
        Navega por el mapa para descubrir puntos de interés
      </p>
    </div>
  );
}