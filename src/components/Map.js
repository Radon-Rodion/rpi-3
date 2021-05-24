import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Abzats extends Component {
  static defaultProps = {
    center: {
      lat: 53.9,
      lng: 27.53
    },
    zoom: 7
  };

  render(){
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAOCO4deQuhfP473sGLSpmnwj-66nww5j0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="Main place"
          />
        </GoogleMapReact>
      </div>
    )
  }
}
