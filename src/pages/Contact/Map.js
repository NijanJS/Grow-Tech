import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
function Map() {
  return (
    <iframe className="map" data-aos="fade-right" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8975234479262!2d85.32224931553388!3d27.68956198279924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1956aebcf001%3A0xac4207f78b529e35!2sGrow%20Tech%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1645627064401!5m2!1sen!2snp" style={{width:"100%", maxHeight:"666px", minHeight:"400px"}}  allowfullscreen="" loading="lazy"></iframe>
    
    // <div className="map" data-aos="fade-right">
      /* <MapContainer center={[27.689683703421675, 85.32442263582168]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[27.689683703421675, 85.32442263582168]}>
          <Popup>Grow Tech Pvt Ltd</Popup>
        </Marker>
      </MapContainer> */
      // </div>
  );
}

export default Map;
