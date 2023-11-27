import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
const Map = () => {
    const position = [23.6850, 90.3563]

    return (
        <div className="py-10">
            <h1 className="text-center text-3xl font-bold py-5">Our live location</h1>
            <div style={{ height: '400px', width: '100%', overflow: 'hidden' }}>
     <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }} scrollWheelZoom={false}>
     <TileLayer
    //  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
     </Marker>
     </MapContainer>
            </div>
        </div>
    );
};

export default Map;