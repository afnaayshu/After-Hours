import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


// Import your custom icons
import restaurantIcon from './images/restaurant.png';
import streetFoodIcon from './images/streetfood.png';
import crowdIcon from './images/crowd.png';

// Initial coordinates for restaurants, street food, and crowd locations
let restaurantCoordinates = { lat: 12.3456, lng: 78.9012 };
let streetFoodCoordinates = { lat: 12.6789, lng: 78.3456 };
let crowdLocations = [
  { lat: 12.1111, lng: 78.2222 },
  { lat: 12.3333, lng: 78.4444 },
  { lat: 12.5555, lng: 78.6666 },
];

// Define the Google Map component
const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
    const [clickedLocation, setClickedLocation] = useState(null);

    const handleMapClick = (e) => {
      // Update the clickedLocation state when the map is clicked
      setClickedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    };

    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={clickedLocation || { lat: 12.3456, lng: 78.9012 }}
        onClick={handleMapClick}
      >
        <Marker
          position={restaurantCoordinates}
          icon={{ url: restaurantIcon, scaledSize: new window.google.maps.Size(40, 40) }}
        />
        <Marker
          position={streetFoodCoordinates}
          icon={{ url: streetFoodIcon, scaledSize: new window.google.maps.Size(40, 40) }}
        />

        {/* Display crowd markers at multiple locations (modify as needed) */}
        {crowdLocations.map((location, index) => {
          return (
            <Marker
              key={index}
              position={location}
              icon={{ url: crowdIcon, scaledSize: new window.google.maps.Size(40, 40) }}
            />
          );
        })}
      </GoogleMap>
    );
  })
);

function MapPage() {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC_N3N6FY4iEeSUBmckPSsBp4-MAtTlSNM&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default MapPage;
