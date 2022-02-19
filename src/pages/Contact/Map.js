import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
function Map() {
  return (
    <div className="map" data-aos="fade-right">
      <MapContainer center={[27.689683703421675, 85.32442263582168]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[27.689683703421675, 85.32442263582168]}>
          <Popup>Grow Tech Pvt Ltd</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
