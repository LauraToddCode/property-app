import React from "react";
import GoogleMapReact, { Marker } from 'google-maps-react';
import properties from "../../properties.json";

class PropertiesMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (event) => {
        this.setState({
            id: event.id
        })
    }

    static defaultProps = {
        center: { lat: 51.240738, lng: -0.573903}, 
        zoom: 12
     }

    render(){


        return (
            <div style={{ width: "50%", height: "75%" }}>
                <GoogleMapReact 
                bootstrapURLKeys={{
                    key: 'AIzaSyCVc5BV5f51pj4r0K3RhGy4EDVGFKyGfqo', 
                    language: 'en'
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                google={this.props.google}
                >
                {properties.map(property =>
                    <Marker position={{ lat: property.lat, lng: property.lng }} onClick={this.handleClick} id={property.id} key={property.id}>
                    </Marker>
                )}
                </GoogleMapReact>                    
            </div>
        )
    }   
}

export default PropertiesMap;