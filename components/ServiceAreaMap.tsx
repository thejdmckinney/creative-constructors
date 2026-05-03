'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface ServiceAreaMapProps {
  accessToken: string;
  height?: string;
}

export default function ServiceAreaMap({ accessToken, height = '500px' }: ServiceAreaMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !accessToken) return;

    try {
      mapboxgl.accessToken = accessToken;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-96.6, 33.0],
        zoom: 9.5,
      });

      const handleMapLoad = () => {
        if (!map.current) return;

        const sourceData = {
          type: 'geojson' as const,
          data: {
            type: 'FeatureCollection' as const,
            features: [
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.825, 32.835], [-96.8, 32.835], [-96.8, 32.815], [-96.825, 32.815], [-96.825, 32.835]]] }, properties: { name: 'University Park', premium: true }, id: 0 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.81, 32.835], [-96.785, 32.835], [-96.785, 32.815], [-96.81, 32.815], [-96.81, 32.835]]] }, properties: { name: 'Highland Park', premium: true }, id: 1 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.9, 32.9], [-96.6, 32.9], [-96.6, 32.6], [-96.9, 32.6], [-96.9, 32.9]]] }, properties: { name: 'Dallas' }, id: 2 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.85, 33.05], [-96.55, 33.05], [-96.55, 32.75], [-96.85, 32.75], [-96.85, 33.05]]] }, properties: { name: 'Plano' }, id: 3 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.68, 33.15], [-96.54, 33.15], [-96.54, 32.95], [-96.68, 32.95], [-96.68, 33.15]]] }, properties: { name: 'Allen' }, id: 4 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.65, 33.25], [-96.45, 33.25], [-96.45, 33.0], [-96.65, 33.0], [-96.65, 33.25]]] }, properties: { name: 'McKinney' }, id: 5 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.75, 32.9], [-96.5, 32.9], [-96.5, 32.7], [-96.75, 32.7], [-96.75, 32.9]]] }, properties: { name: 'Garland' }, id: 6 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.75, 32.95], [-96.55, 32.95], [-96.55, 32.8], [-96.75, 32.8], [-96.75, 32.95]]] }, properties: { name: 'Richardson' }, id: 7 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.45, 32.95], [-96.25, 32.95], [-96.25, 32.8], [-96.45, 32.8], [-96.45, 32.95]]] }, properties: { name: 'Rockwall' }, id: 8 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.55, 32.9], [-96.4, 32.9], [-96.4, 32.75], [-96.55, 32.75], [-96.55, 32.9]]] }, properties: { name: 'Rowlett' }, id: 9 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.6, 33.05], [-96.45, 33.05], [-96.45, 32.9], [-96.6, 32.9], [-96.6, 33.05]]] }, properties: { name: 'Sachse' }, id: 10 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.55, 33.0], [-96.35, 33.0], [-96.35, 32.85], [-96.55, 32.85], [-96.55, 33.0]]] }, properties: { name: 'Wylie' }, id: 11 },
              { type: 'Feature' as const, geometry: { type: 'Polygon' as const, coordinates: [[[-96.5, 32.75], [-96.3, 32.75], [-96.3, 32.55], [-96.5, 32.55], [-96.5, 32.75]]] }, properties: { name: 'Mesquite' }, id: 12 },
            ],
          },
        };

        map.current.addSource('service-areas', sourceData);

        map.current.addLayer({
          id: 'service-areas-fill',
          type: 'fill',
          source: 'service-areas',
          paint: { 'fill-color': '#2E5090', 'fill-opacity': 0.4 },
          filter: ['!', ['==', ['get', 'premium'], true]],
        });

        map.current.addLayer({
          id: 'premium-areas-fill',
          type: 'fill',
          source: 'service-areas',
          paint: { 'fill-color': '#FFB347', 'fill-opacity': 0.5 },
          filter: ['==', ['get', 'premium'], true],
        });

        map.current.addLayer({
          id: 'service-areas-outline',
          type: 'line',
          source: 'service-areas',
          paint: { 'line-color': '#FFFFFF', 'line-width': 2 },
        });

        map.current.addLayer({
          id: 'service-areas-labels',
          type: 'symbol',
          source: 'service-areas',
          layout: {
            'text-field': ['get', 'name'],
            'text-size': 12,
            'text-offset': [0, 0],
          },
          paint: { 'text-color': '#FFFFFF', 'text-halo-color': '#000000', 'text-halo-width': 1 },
        });
      };

      map.current.on('load', handleMapLoad);
    } catch (error) {
      console.error('Error initializing Mapbox:', error);
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [accessToken]);

  return <div ref={mapContainer} className="w-full" style={{ height }} />;
}
