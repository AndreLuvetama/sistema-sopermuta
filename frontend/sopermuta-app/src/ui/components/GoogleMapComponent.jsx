import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const GoogleMapComponent = () => {
    const defaultProps = {
        center: {
          lat: -23.586330988,
          lng: -46.655330712
        },
        zoom: 11
      };
    
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '70vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={-23.586330988}
              lng={-46.655330712}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
}
