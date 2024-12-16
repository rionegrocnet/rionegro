"use client";

import { MapPoint } from '@/components/map/shared/MapPoint';
import { BaseMap } from '@/components/map/shared/BaseMap';
import { MapHelpMessage } from './MapHelpMessage';
import { MapContainer } from './MapContainer';
import { christmasScenarios } from '@/lib/data/scenarios';
import { MAP_CONSTANTS } from '@/lib/constants/map';
import '@/styles/map.css';

export function MapMobile() {
  return (
    <div className="w-full h-screen fixed inset-0 block md:hidden touch-none">
      <MapHelpMessage />
      <div className="w-full h-full overflow-hidden">
        <MapContainer>
          <svg
            viewBox={`0 0 ${MAP_CONSTANTS.VIEWPORT.WIDTH} ${MAP_CONSTANTS.VIEWPORT.HEIGHT}`}
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
        </MapContainer>
      </div>
    </div>
  );
}