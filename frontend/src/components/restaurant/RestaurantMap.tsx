import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Restaurant } from '../../types/Restaurant';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

interface LeafletIconDefault extends L.Icon {
  _getIconUrl?: () => string;
}

delete (L.Icon.Default.prototype as LeafletIconDefault)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface RestaurantMapProps {
  restaurant?: Restaurant;
  restaurants?: Restaurant[];
  height?: string;
}

const RestaurantMap = ({
  restaurant,
  restaurants,
  height = '400px',
}: RestaurantMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Dynamically load Leaflet CSS if needed
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, {
        attributionControl: true,
        zoomControl: true,
      }).setView([59.3293, 18.0686], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapInstanceRef.current);
    }

    const map = mapInstanceRef.current;

    // Clear any existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Single restaurant view
    if (restaurant && restaurant.latitude && restaurant.longitude) {
      const marker = L.marker([restaurant.latitude, restaurant.longitude])
        .addTo(map)
        .bindPopup(`<b>${restaurant.name}</b><br>${restaurant.address}`);
      map.setView([restaurant.latitude, restaurant.longitude], 15);
      marker.openPopup();
    } else if (restaurants && restaurants.length > 0) {
      // Multiple restaurants view
      const bounds = L.latLngBounds([]);
      let hasValidCoordinates = false;

      restaurants.forEach((r) => {
        if (r.latitude && r.longitude) {
          hasValidCoordinates = true;
          L.marker([r.latitude, r.longitude])
            .addTo(map)
            .bindPopup(`<b>${r.name}</b><br>${r.address}`);
          bounds.extend([r.latitude, r.longitude]);
        }
      });

      if (hasValidCoordinates) {
        map.fitBounds(bounds, { padding: [30, 30] });
      }
    }

    // Invalidate size to handle potential container resizing
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // No cleanup for map instance to preserve state between renders
  }, [restaurant, restaurants]);

  return (
    <div
      ref={mapRef}
      style={{ height, width: '100%' }}
      className="leaflet-container"
    />
  );
};

export default RestaurantMap;
