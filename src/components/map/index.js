import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import Pins from './pins';
import CityInfo from './city-info';
import "./styles.scss"

const Map = ({ data }) => {
    const [viewport, setViewport] = useState({
        longitude: -75,
        latitud: 20,
        zoom: 5,
        bearing: 0,
        pitch: 0,
        width: 'fit',
        height: 500
    });

    const [popupInfo, setPopupInfo] = useState(null);
    return (
        <div className="map">
            <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/dark-v9"
            >
                {data && 
                    <Pins data={data} onClick={setPopupInfo} />
                }
                {popupInfo && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popupInfo.long}
                    latitude={popupInfo.lat}
                    closeOnClick={false}
                    onClose={setPopupInfo}
                >
                    <CityInfo info={popupInfo} />
                </Popup>
                )}
            </ReactMapGL>
        </div> 
        
    );
}
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default Map;
