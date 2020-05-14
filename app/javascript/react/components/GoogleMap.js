import React, { Component, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode"

const GoogleMap = (props) => {
  const location = props.city
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [locationProps, setLocationProps] = useState({})

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
  )
},[])
const defaultProps = {
  center: {
    lat: latitude,
    lng: longitude
  },
  zoom: 11
};
return (
  <div className="frame text-right"><p>{props.location}</p>
  <div style={{ height: '60%', width: '100%' }}>
  <GoogleMapReact
  bootstrapURLKeys={{ key: 'AIzaSyCskQI1pFMwwvsjgTZJ8Z2ISlS1dtkWc1E' }}
  center={[latitude,longitude]}
  defaultZoom={defaultProps.zoom}
  >
  <AnyReactComponent
  lat={latitude}
  lng={longitude}
  text=<h5 className="font green">Theaters</h5>
  />
  </GoogleMapReact>
  </div>
  </div>
)
}
export default GoogleMap
