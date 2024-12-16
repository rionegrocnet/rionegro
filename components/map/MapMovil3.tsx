"use client";

import { MapPoint } from '@/components/map/shared/MapPointMovil';
import { BaseMap } from '@/components/map/shared/BaseMap';
import { InfoBanner } from './InfoBannerMovil';
import { christmasScenarios } from '@/lib/data/scenarios';
import '@/styles/map.css';

export function MapMovil3() {
  return (
    <div className="w-full h-screen relative block md:hidden overflow-x-scroll">
      <InfoBanner />
      <svg
        viewBox="0 0 3262.05 1714.95"
        className="h-full"
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