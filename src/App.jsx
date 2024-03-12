import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ReactMapGL, {Source, Layer, Popup} from "react-map-gl";
//import * as wnhpData from './data/WNHP_Element_Occurrences.geojson';
import './App.css';

function App() {
  const [hoverInfo, setHoverInfo] = useState(null);
  const layerStyle = {
    id: 'data',
    type: 'fill',
    paint: {
      'fill-outline-color': 'rgba(0,0,0,0.1)',
      'fill-color': 'rgba(0,0,0,0.1)'      
    }
  };

  // Highlighted polygons
  const highlightLayer = {
    id: 'highlighted',
    type: 'fill',
    source: 'data',
    paint: {
      'fill-outline-color': '#484896',
      'fill-color': '#6e599f',
      'fill-opacity': 0.75
    }
  };

  const onHover = useCallback(event => {
    const region = event.features && event.features[0];
    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      regionName: region && region.properties.NAME
    });
  }, []);

  /*const onHover = useCallback(event => {
    const {
      features,
      point: {x, y}
    } = event;
    const hoveredFeature = features && features[0];

    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []); */

  const selectedRegion = (hoverInfo && hoverInfo.regionName) || '';
  const filter = useMemo(() => ['in', 'NAME', selectedRegion ], [selectedRegion]);

  return (
    <>
      <ReactMapGL
      mapboxAccessToken={import.meta.env.VITE_REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        latitude: 47.751167, 
        longitude: -120.740983,
        zoom: 5,        
      }}    
      mapStyle="mapbox://styles/mapbox/light-v11"
      interactiveLayerIds={['data']}
      onMouseMove={onHover}
      >
        <Source id="my-data" type="geojson" data={'/data/PNW_Ecoregions.geojson'}>
          <Layer beforeId="waterway-label" {...layerStyle} />
          <Layer beforeId="waterway-label" {...highlightLayer} filter={filter} />
        </Source>

      {selectedRegion && (
        <Popup
            longitude={hoverInfo.longitude}
            latitude={hoverInfo.latitude}
            closeButton={false}
            offset={[0,0]}
            className="info"
          >
            {selectedRegion}
        </Popup>
        )}
      </ReactMapGL>
    </>
  )
}

export default App
