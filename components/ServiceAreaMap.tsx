'use client';

import { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

interface ServiceAreaMapProps {
  accessToken?: string;
  height?: string;
}

export default function ServiceAreaMap({ accessToken, height = '500px' }: ServiceAreaMapProps) {
  // Access the environment variable directly in the client component
  const token = accessToken || process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapInitialized, setMapInitialized] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    if (!mapContainer.current) {
      console.error('Map container not found');
      setMapError('Map container not found');
      return;
    }

    if (!token) {
      console.error('Mapbox token missing or empty');
      setMapError('Mapbox access token is missing. Please check your environment variables.');
      return;
    }

    console.log('Initializing map with token length:', token.length);

    // Dynamically import mapbox-gl here to ensure it's only loaded on client
    import('mapbox-gl').then((mbx) => {
      const mapboxgl = mbx.default;

      try {
        mapboxgl.accessToken = token;
        console.log('Creating map with token:', token.substring(0, 15) + '...');

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

          // Add sources with marker points instead of overlapping polygons
          map.current.addSource('service-areas', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  id: 0,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.8005, 32.8500],
                  },
                  properties: { name: 'University Park', isPremium: true },
                },
                {
                  type: 'Feature',
                  id: 1,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.7895, 32.8334],
                  },
                  properties: { name: 'Highland Park', isPremium: true },
                },
                {
                  type: 'Feature',
                  id: 2,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.7970, 32.7767],
                  },
                  properties: { name: 'Dallas', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 3,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.6989, 33.0198],
                  },
                  properties: { name: 'Plano', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 4,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.6705, 33.1031],
                  },
                  properties: { name: 'Allen', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 5,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.6154, 33.1972],
                  },
                  properties: { name: 'McKinney', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 6,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.6389, 32.9126],
                  },
                  properties: { name: 'Garland', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 7,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.7299, 32.9483],
                  },
                  properties: { name: 'Richardson', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 8,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.4599, 32.9312],
                  },
                  properties: { name: 'Rockwall', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 9,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.5639, 32.9029],
                  },
                  properties: { name: 'Rowlett', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 10,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.5489, 32.9765],
                  },
                  properties: { name: 'Sachse', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 11,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.5389, 33.0151],
                  },
                  properties: { name: 'Wylie', isPremium: false },
                },
                {
                  type: 'Feature',
                  id: 12,
                  geometry: {
                    type: 'Point',
                    coordinates: [-96.5991, 32.7668],
                  },
                  properties: { name: 'Mesquite', isPremium: false },
                },
              ],
            },
          });

          // Add circle markers for each service area
          map.current.addLayer({
            id: 'service-areas-circles',
            type: 'circle',
            source: 'service-areas',
            paint: {
              'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                8, 8,
                10, 16,
                12, 24
              ],
              'circle-color': [
                'case',
                ['get', 'isPremium'],
                '#FF8C42',
                '#2E5090'
              ],
              'circle-opacity': 0.7,
              'circle-stroke-width': 3,
              'circle-stroke-color': '#FFFFFF',
              'circle-stroke-opacity': 0.9,
            },
          });

          // Add label layer with better styling
          map.current.addLayer({
            id: 'service-areas-label',
            type: 'symbol',
            source: 'service-areas',
            layout: {
              'text-field': ['get', 'name'],
              'text-font': ['DIN Pro Bold', 'Arial Unicode MS Bold'],
              'text-size': [
                'interpolate',
                ['linear'],
                ['zoom'],
                8, 10,
                10, 14,
                12, 16
              ],
              'text-offset': [0, 2.5],
              'text-anchor': 'top',
            },
            paint: {
              'text-color': '#2E5090',
              'text-halo-color': '#FFFFFF',
              'text-halo-width': 2,
              'text-halo-blur': 0.5,
            },
          });

          // Add hover effect
          let hoveredStateId: string | number | null = null;

          map.current.on('mouseenter', 'service-areas-circles', () => {
            map.current.getCanvas().style.cursor = 'pointer';
          });

          map.current.on('mouseleave', 'service-areas-circles', () => {
            map.current.getCanvas().style.cursor = '';
          });

          map.current.on('mousemove', 'service-areas-circles', (e: any) => {
            if (e.features.length > 0) {
              if (hoveredStateId !== null) {
                map.current.setFeatureState(
                  { source: 'service-areas', id: hoveredStateId },
                  { hover: false }
                );
              }
              hoveredStateId = e.features[0].id;
              map.current.setFeatureState(
                { source: 'service-areas', id: hoveredStateId },
                { hover: true }
              );
            }
          });

          map.current.on('mouseleave', 'service-areas-circles', () => {
            if (hoveredStateId !== null) {
              map.current.setFeatureState(
                { source: 'service-areas', id: hoveredStateId },
                { hover: false }
              );
            }
            hoveredStateId = null;
          });

          // Update circle size on hover
          map.current.setPaintProperty('service-areas-circles', 'circle-radius', [
            'interpolate',
            ['linear'],
            ['zoom'],
            8, ['case', ['boolean', ['feature-state', 'hover'], false], 12, 8],
            10, ['case', ['boolean', ['feature-state', 'hover'], false], 20, 16],
            12, ['case', ['boolean', ['feature-state', 'hover'], false], 30, 24]
          ]);
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
  }, [token]);

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
