import React, { Component, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode"
import SearchBox from "./SearchBox"

const GoogleMap = (props) => {
  const location = props.city
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [locationProps, setLocationProps] = useState({})
  const [apiReady, setApiReady] = useState(false);
  const [map, setMap] = useState(null);
  const [googlemaps, setGoogleMaps] = useState(null);
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  useEffect(() =>{
    Geocode.setApiKey("AIzaSyCskQI1pFMwwvsjgTZJ8Z2ISlS1dtkWc1E");
    Geocode.setLanguage("en");
    Geocode.setRegion("es");
    Geocode.enableDebug();
    Geocode.fromAddress("Boston").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitude(lat)
        setLongitude(lng)
        setLocationProps({center: {
          lat: lat,
          lng: lng
        },
        zoom: 11
      })
    },
    error => {
      console.error(error);
    }
  )},[])

  const apiHasLoaded = (result) => {
    if (result.map && result.maps) {
      setMap(result.map);
      setGoogleMaps(result.maps);
      setApiReady(true);
    }
  };


  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: 11
  };

  return (
    <div className="frame text-right">
    <p>{props.location}</p>
    <div style={{ height: '60%', width: '100%' }}>
    <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyCskQI1pFMwwvsjgTZJ8Z2ISlS1dtkWc1E', libraries: ['places']}}
    center={[latitude,longitude]}
    defaultZoom={defaultProps.zoom}
    yesIWantToUseGoogleMapApiInternals
    onGoogleApiLoaded={apiHasLoaded}
    >
    <AnyReactComponent
    lat={latitude}
    lng={longitude}
    // text=<h5 className="font green">Theaters</h5>
    />
    {apiReady && (
           <SearchBox
                map={map}
                googlemaps={googlemaps}
            />
           )}
    </GoogleMapReact>
    </div>
    </div>
  )
}
export default GoogleMap
