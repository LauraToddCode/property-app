import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import properties from "../properties.json";
import { CallReceived } from "@material-ui/icons";

class MapContainer extends React.Component {
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
        console.log(this.state.id)
    }

    render(){

        const mapStyles = {
            width: "calc(100vw - 385px)",
            height: "450px",
        };


        return (
            <Map 
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: 51.240738, lng: -0.573903}}    
            >
                {properties.map(property =>
                    <Marker position={{ lat: property.lat, lng: property.lng }} onClick={this.handleClick} id={property.id} key={property.id}>
                    </Marker>
                )}
            </Map>
        )
    }   
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCVc5BV5f51pj4r0K3RhGy4EDVGFKyGfqo'
  })(MapContainer);