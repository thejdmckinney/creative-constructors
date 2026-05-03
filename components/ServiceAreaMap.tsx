'use client';

import { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

interface ServiceAreaMapProps {
  accessToken: string;
  height?: string;
}

export default function ServiceAreaMap({ accessToken, height = '500px' }: ServiceAreaMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapInitialized, setMapInitialized] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    if (!mapContainer.current) {
      console.error('Map container not found');
      return;
    }

    if (!accessToken) {
      console.error('Mapbox token missing');
      return;
    }

    // Dynamically import mapbox-gl here to ensure it's only loaded on client
    import('mapbox-gl').then((mbx) => {
      const mapboxgl = mbx.default;

      try {
        mapboxgl.accessToken = accessToken;
        console.log('Creating map with token:', accessToken.substring(0, 15) + '...');

        map.current = new mapboxgl.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [-96.6, 33.0],
          zoom: 9.5,
        });

        map.current.on('load', () => {
          console.log('Map loaded successfully');
          setMapInitialized(true);
          setMapError(null);

          // Add sources and layers
          map.current.addSource('service-areas', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  id: 0,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.825, 32.835],
                      [-96.8, 32.835],
                      [-96.8, 32.815],
                      [-96.825, 32.815],
                      [-96.825, 32.835],
                    ]],
                  },
                  properties: { name: 'University Park' },
                },
                {
                  type: 'Feature',
                  id: 1,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.81, 32.835],
                      [-96.785, 32.835],
                      [-96.785, 32.815],
                      [-96.81, 32.815],
                      [-96.81, 32.835],
                    ]],
                  },
                  properties: { name: 'Highland Park' },
                },
                {
                  type: 'Feature',
                  id: 2,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.9, 32.9],
                      [-96.6, 32.9],
                      [-96.6, 32.6],
                      [-96.9, 32.6],
                      [-96.9, 32.9],
                    ]],
                  },
                  properties: { name: 'Dallas' },
                },
                {
                  type: 'Feature',
                  id: 3,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.85, 33.05],
                      [-96.55, 33.05],
                      [-96.55, 32.75],
                      [-96.85, 32.75],
                      [-96.85, 33.05],
                    ]],
                  },
                  properties: { name: 'Plano' },
                },
                {
                  type: 'Feature',
                  id: 4,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.68, 33.15],
                      [-96.54, 33.15],
                      [-96.54, 32.95],
                      [-96.68, 32.95],
                      [-96.68, 33.15],
                    ]],
                  },
                  properties: { name: 'Allen' },
                },
                {
                  type: 'Feature',
                  id: 5,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.65, 33.25],
                      [-96.45, 33.25],
                      [-96.45, 33.0],
                      [-96.65, 33.0],
                      [-96.65, 33.25],
                    ]],
                  },
                  properties: { name: 'McKinney' },
                },
                {
                  type: 'Feature',
                  id: 6,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.75, 32.9],
                      [-96.5, 32.9],
                      [-96.5, 32.7],
                      [-96.75, 32.7],
                      [-96.75, 32.9],
                    ]],
                  },
                  properties: { name: 'Garland' },
                },
                {
                  type: 'Feature',
                  id: 7,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.75, 32.95],
                      [-96.55, 32.95],
                      [-96.55, 32.8],
                      [-96.75, 32.8],
                      [-96.75, 32.95],
                    ]],
                  },
                  properties: { name: 'Richardson' },
                },
                {
                  type: 'Feature',
                  id: 8,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.45, 32.95],
                      [-96.25, 32.95],
                      [-96.25, 32.8],
                      [-96.45, 32.8],
                      [-96.45, 32.95],
                    ]],
                  },
                  properties: { name: 'Rockwall' },
                },
                {
                  type: 'Feature',
                  id: 9,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.55, 32.9],
                      [-96.4, 32.9],
                      [-96.4, 32.75],
                      [-96.55, 32.75],
                      [-96.55, 32.9],
                    ]],
                  },
                  properties: { name: 'Rowlett' },
                },
                {
                  type: 'Feature',
                  id: 10,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.6, 33.05],
                      [-96.45, 33.05],
                      [-96.45, 32.9],
                      [-96.6, 32.9],
                      [-96.6, 33.05],
                    ]],
                  },
                  properties: { name: 'Sachse' },
                },
                {
                  type: 'Feature',
                  id: 11,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.55, 33.0],
                      [-96.35, 33.0],
                      [-96.35, 32.85],
                      [-96.55, 32.85],
                      [-96.55, 33.0],
                    ]],
                  },
                  properties: { name: 'Wylie' },
                },
                {
                  type: 'Feature',
                  id: 12,
                  geometry: {
                    type: 'Polygon',
                    coordinates: [[
                      [-96.5, 32.75],
                      [-96.3, 32.75],
                      [-96.3, 32.55],
                      [-96.5, 32.55],
                      [-96.5, 32.75],
                    ]],
                  },
                  properties: { name: 'Mesquite' },
                },
              ],
            },
          });

          map.current.addLayer({
            id: 'service-areas-layer',
            type: 'fill',
            source: 'service-areas',
            paint: {
              'fill-color': '#2E5090',
              'fill-opacity': 0.4,
            },
          });

          map.current.addLayer({
            id: 'service-areas-outline',
            type: 'line',
            source: 'service-areas',
            paint: {
              'line-color': '#FFFFFF',
              'line-width': 2,
            },
          });

          map.current.addLayer({
            id: 'service-areas-label',
            type: 'symbol',
            source: 'service-areas',
            layout: {
              'text-field': ['get', 'name'],
              'text-size': 12,
            },
            paint: {
              'text-color': '#FFFFFF',
              'text-halo-color': '#000000',
              'text-halo-width': 1,
            },
          });
        });

        map.current.on('error', (error: any) => {
          console.error('Mapbox error:', error);
          setMapError(String(error && error.error && error.error.message ? error.error.message : error));
        });
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError(String(error));
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [accessToken]);

  return (
    <div className="w-full" style={{ height, minHeight: '400px' }}>
      <div ref={mapContainer} className="w-full h-full" />
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white p-6">
          <div className="max-w-lg text-center">
            <h3 className="text-xl font-bold mb-2">Map Failed to Load</h3>
            <p className="text-sm mb-4">{mapError}</p>
            <p className="text-xs">Check your browser console and network requests for details.</p>
          </div>
        </div>
      )}
    </div>
  );
}
