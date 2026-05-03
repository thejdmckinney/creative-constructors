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
    if (!mapContainer.current) return;

    // Set the access token
    mapboxgl.accessToken = accessToken;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-96.6, 33.0],
      zoom: 9.5,
    });

    // Define service area boundaries as polygons
    const sourceData = {
      type: 'geojson' as const,
      data: {
        type: 'FeatureCollection' as const,
        features: [
          // University Park (premium)
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
              coordinates: [[
                [-96.825, 32.835],
                [-96.8, 32.835],
                [-96.8, 32.815],
                [-96.825, 32.815],
                [-96.825, 32.835],
              ]],
            },
            properties: { name: 'University Park', premium: true },
          },
          // Highland Park (premium)
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
              coordinates: [[
                [-96.81, 32.835],
                [-96.785, 32.835],
                [-96.785, 32.815],
                [-96.81, 32.815],
                [-96.81, 32.835],
              ]],
            },
            properties: { name: 'Highland Park', premium: true },
          },
          // Dallas
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // Plano
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // Allen
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // McKinney
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // Garland
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // Richardson
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // Rockwall
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // Rowlett
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // Sachse
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // Wylie
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
          // Mesquite
          {
            type: 'Feature' as const,
            geometry: {
              type: 'Polygon' as const,
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
    };

    // Add source and layer on map load
    map.current.on('load', () => {
      if (!map.current) return;

      // Add data source
      map.current.addSource('service-areas', sourceData);

      // Add fill layer for regular service areas
      map.current.addLayer({
        id: 'service-areas-fill',
        type: 'fill',
        source: 'service-areas',
        paint: {
          'fill-color': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            '#FF8C42',
            '#2E5090'
          ],
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            0.8,
            0.4
          ],
        },
        filter: ['!', ['==', ['get', 'premium'], true]],
      });

      // Add fill layer for premium service areas
      map.current.addLayer({
        id: 'premium-areas-fill',
        type: 'fill',
        source: 'service-areas',
        paint: {
          'fill-color': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            '#FF6B35',
            '#FFB347'
          ],
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            0.9,
            0.5
          ],
        },
        filter: ['==', ['get', 'premium'], true],
      });

      // Add outline layer
      map.current.addLayer({
        id: 'service-areas-outline',
        type: 'line',
        source: 'service-areas',
        paint: {
          'line-color': '#FFFFFF',
          'line-width': 2,
        },
      });

      // Add labels
      map.current.addLayer({
        id: 'service-areas-labels',
        type: 'symbol',
        source: 'service-areas',
        layout: {
          'text-field': ['get', 'name'],
          'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
          'text-size': 14,
          'text-offset': [0, 0],
        },
        paint: {
          'text-color': '#FFFFFF',
          'text-halo-color': '#000000',
          'text-halo-width': 1,
        },
      });

      // Hover effects
      let hoveredFeatureId: string | number | undefined;

      map.current.on('mousemove', 'service-areas-fill', (e) => {
        if (e.features && e.features.length > 0) {
          if (hoveredFeatureId !== undefined) {
            map.current?.setFeatureState(
              { source: 'service-areas', id: hoveredFeatureId as string | number },
              { hover: false }
            );
          }
          hoveredFeatureId = e.features[0].id;
          if (hoveredFeatureId !== undefined) {
            map.current?.setFeatureState(
              { source: 'service-areas', id: hoveredFeatureId as string | number },
              { hover: true }
            );
          }
          map.current!.getCanvas().style.cursor = 'pointer';
        }
      });

      map.current.on('mousemove', 'premium-areas-fill', (e) => {
        if (e.features && e.features.length > 0) {
          if (hoveredFeatureId !== undefined) {
            map.current?.setFeatureState(
              { source: 'service-areas', id: hoveredFeatureId as string | number },
              { hover: false }
            );
          }
          hoveredFeatureId = e.features[0].id;
          if (hoveredFeatureId !== undefined) {
            map.current?.setFeatureState(
              { source: 'service-areas', id: hoveredFeatureId as string | number },
              { hover: true }
            );
          }
          map.current!.getCanvas().style.cursor = 'pointer';
        }
      });

      map.current.on('mouseleave', 'service-areas-fill', () => {
        if (hoveredFeatureId !== undefined) {
          map.current?.setFeatureState(
            { source: 'service-areas', id: hoveredFeatureId as string | number },
            { hover: false }
          );
        }
        hoveredFeatureId = undefined;
        map.current!.getCanvas().style.cursor = '';
      });

      map.current.on('mouseleave', 'premium-areas-fill', () => {
        if (hoveredFeatureId !== undefined) {
          map.current?.setFeatureState(
            { source: 'service-areas', id: hoveredFeatureId as string | number },
            { hover: false }
          );
        }
        hoveredFeatureId = undefined;
        map.current!.getCanvas().style.cursor = '';
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [accessToken]);

  return <div ref={mapContainer} style={{ width: '100%', height }} />;
}
