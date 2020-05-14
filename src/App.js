import React from "react";
import {Map, ImageOverlay, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import cecMap from './cecbeacon.jpg'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class TargetMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: 100,
      lng: 100,
      zoom: 1,
    };
  }

  render() {
    const center = L.latLng([160, 90])
    const position = [this.state.lat, this.state.lng]
    const filepath = cecMap;
    
    const corner1 = L.latLng([0,0])
    const corner2 = L.latLng([320,180])
    const bounds = L.latLngBounds(corner2,corner1)

    return (     
      <div className="map">
        <Map 
          center={center} 
          scrollWheelZoom={false}
          doubleClickZoom={false} 
          zoom={this.state.zoom} 
          crs={L.CRS.Simple}>
            
          <ImageOverlay
            url={filepath}
            bounds={bounds}
          />

          <Marker position={position}>
            <Popup>
              Testing marker <br />
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default TargetMap