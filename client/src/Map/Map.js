import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css"
import "./ConfigureIcon";
import Pin from "../Pin/Pin";
function Map({ position }) {
    let defaultposition = [51.505, -0.09];
    if (position.length == 1) {
        defaultposition = [parseFloat(position[0]?.latitude), parseFloat(position[0]?.longitude)]
    }

    console.log(position)
    console.log(defaultposition);
    return (
        // <></>

        <MapContainer center={defaultposition} zoom={6} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position.map(function (el, index) {
                return (<Marker key={index} position={[parseFloat(el?.latitude), parseFloat(el?.longitude)]}>
                    <Popup>
                        <Pin item={el} />
                    </Popup>
                </Marker>)
            })}

        </MapContainer>

    )
}
export default Map;
