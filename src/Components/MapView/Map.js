import React, { useState } from "react";
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow 
} from "react-google-maps";
import properties from "../properties.json";
import MarkerInfo from "./MarkerInfo";
import { connect } from "react-redux";
import { addToSaved, loadCurrentItem } from "../../redux/save/save-actions";
import { useHistory } from "react-router-dom";


function MapComponent({ minPrice, maxPrice, minBedrooms, maxBedrooms, addToSaved, loadCurrentItem }) {
    const history = useHistory();
    const validProperty = (price, beds) => price >= minPrice && price <= maxPrice && beds >= minBedrooms && beds <= maxBedrooms;

    const [selectedProperty, setSelectedProperty] = useState(null);
    
    function redirectToPropertyPage(href) {
        loadCurrentItem(selectedProperty);
        history.push(href);
    }


    return (
        <GoogleMap 
            defaultZoom={12}
            defaultCenter={{ lat: 51.23651480350905, lng: -0.5703780104611352 }}
        >
            {properties.map((property) => validProperty(property.price, property.bedrooms) && (
                <Marker 
                    key={property.id} 
                    position={{
                        lat: property.lat, 
                        lng: property.lng
                    }}
                    onClick ={() => {
                        setSelectedProperty(property);
                    }}
                    icon={{
                        url: "/images/mapIcon/houseIcon.png",
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                />
            ))}

            {selectedProperty && (
                <InfoWindow
                    position={{
                        lat: selectedProperty.lat, 
                        lng: selectedProperty.lng
                    }}
                    onCloseClick={() => {
                        setSelectedProperty(null);
                    }}
                >
                    <MarkerInfo 
                        key={selectedProperty.id}
                        id={selectedProperty.id}
                        img={selectedProperty.imgs[0]}
                        price={selectedProperty.displayPrice}
                        type={selectedProperty.type}
                        beds={selectedProperty.bedrooms}
                        baths={selectedProperty.bathrooms}
                        living={selectedProperty.livingRooms}
                        findOutMore={redirectToPropertyPage}
                        saveItem={() => addToSaved(selectedProperty.id)}
                    />
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

const mapStateToProps = state => {
    return {
        minPrice: state.save.minPrice,
        maxPrice: state.save.maxPrice,
        minBedrooms: state.save.minBedrooms,
        maxBedrooms: state.save.maxBedrooms
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToSaved: (id) => dispatch(addToSaved(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

const WrappedMap = connect(mapStateToProps, mapDispatchToProps)(withScriptjs(withGoogleMap(MapComponent)));

function Map() {
    return (
        <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCVc5BV5f51pj4r0K3RhGy4EDVGFKyGfqo`}
            loadingElement={<div style={{ height:"100%"}} />}
            containerElement={<div style={{ height:"100%"}} />}
            mapElement={<div style={{ height:"100%"}} />}
        />
    )
}

export default Map;