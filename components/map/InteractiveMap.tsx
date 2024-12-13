"use client";

import { MapPoint } from './MapPoint';
import { BaseMap } from './BaseMap';
import { InfoBanner } from './InfoBanner';
import { christmasScenarios } from '@/lib/data/scenarios';
import '@/styles/map.css';

export function InteractiveMap() {
  return (
    <div className="w-full h-full hidden md:flex" style={{ zIndex: 100, position: 'relative' }}>
       <InfoBanner />
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
  );
}