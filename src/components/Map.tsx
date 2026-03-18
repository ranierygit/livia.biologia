"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix custom icon issue with webpack / Next.js
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

export default function Map() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Fix Leaflet marker icon
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    });
  }, []);

  if (!mounted) {
    return <div className="w-full h-[450px] bg-bg border border-sand/50 rounded-3xl animate-pulse" />;
  }

  const position: [number, number] = [-8.8904, -36.4960]; // Garanhuns - PE

  return (
    <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-sm border border-sand/50 relative z-10">
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={position} pathOptions={{ fillColor: '#3D7A4F', color: '#6BAE82' }} radius={5000} />
        <Marker position={position}>
          <Popup>
            <div className="font-sans">
              <strong>📍 Lívia Oliveira</strong><br /> Professora de Biologia · Garanhuns, PE
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
