import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
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
        <GoogleMap zoom={12} center={{ lat: 48.92810080539947, lng: 2.859230713019272 }} mapContainerClassName="map-container">
          <MarkerF position={{ lat: 48.92810080539947, lng: 2.859230713019272 }} />
        </GoogleMap>
      </>
    );
}

// export default Maps