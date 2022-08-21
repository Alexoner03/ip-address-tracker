import {AppContext, GeoIpContextType} from "../../context/app.context";
import {useContext} from "react";
import {MapContainer, Marker, TileLayer, useMap} from "react-leaflet";
import "./Map.css"
import {LatLngExpression} from "leaflet";


function LocationMarker(props: { location: LatLngExpression }) {
    const map = useMap();

    map.flyTo(props.location, map.getZoom());

    return (
        <Marker position={props.location}/>
    )
}

function Map() {

    const {geoIp} = useContext(AppContext) as GeoIpContextType;

    const markerPosition: LatLngExpression = [geoIp.location.lat, geoIp.location.lng];

    return (
        <MapContainer
            center={markerPosition}
            zoom={13}
            style={{"height": "100%", zIndex: 0, position: "relative"}}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker location={markerPosition}/>
        </MapContainer>
    )
}

export default Map;