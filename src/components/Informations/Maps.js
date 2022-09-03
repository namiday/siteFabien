import React from "react";
import { GoogleMap, useLoadScript, MarkerF,CircleF } from "@react-google-maps/api";
import "./Maps.css"

export default function Maps() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_API_KEY,
    });
  
    if (!isLoaded) return <div>Loading...</div>;
    else  return <Map/>;
}

function Map() { 
    return (
      <> 
        <GoogleMap id="mapID" zoom={12} center={{ lat: 49.137869, lng: 3.079471  }} mapContainerClassName="map-container">
          <MarkerF position={{ lat: 49.137869, lng: 3.079471 }} />
          <CircleF
                  center={{lat: 49.137869, lng: 3.079471}}
                  radius={50000.0}
                  options={{
                    strokeColor: '#f15536',
                    strokeOpacity: 0.8,
                    fillColor:"#2a5777",
                    fillOpacity: 0.10,}}
                />
        </GoogleMap>
      </>
    );
}

// export default Maps