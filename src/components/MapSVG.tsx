import React, { useEffect, useState } from 'react';

const MapSVG: React.FC = () => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch('/city-map.svg')
      .then(response => response.text())
      .then(svg => setSvgContent(svg));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
  );
};

export default MapSVG;

