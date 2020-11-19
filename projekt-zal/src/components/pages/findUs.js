import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '70vh',
  margin: '0 auto',
  marginTop: '5vh',
  borderRadius: '30px',
  border: '1px solid black',
};

export class MapContainer extends Component{
  render() {
    return (
      <>

        <Map
        classname='google_map'
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{lat: 53.115260,lng: 19.050960}}
        >
        <Marker position={{ lat: 53.11560,lng: 19.049760}} />
        </Map>
 
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);

