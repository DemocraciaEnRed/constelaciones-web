import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import "./styles.scss"

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGVtb2NyYWNpYWVucmVkIiwiYSI6ImNrdTdnN3o3NDAwYmUyd3Awb3hqb2dxOW8ifQ.ST1rGN3B-3Y3VCNofnvqfQ'

const Map = () => {
    const [viewport, setViewport] = useState({
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
        width: 'fit',
        height: 500
    });

    return (
        <div className="map">
            <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/dark-v9"
            />
        </div> 
        
    );
}

export default Map;
