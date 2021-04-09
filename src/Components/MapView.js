import React from "react";
import Filters from "./Filters";
import Map from "./MapView/Map"
import ToggleViewNav from "./ToggleViewNav";

function MapView() {

    const [state, setState] = React.useState({
        minPrice: 0,
        maxPrice: 1000000,
        minBedrooms: 1,
        maxBedrooms: 10
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    }

    return (
        <div className="appContainer">
            <Filters 
                handleChange={handleChange} 
                minPriceValue={state.minPrice} 
                maxPriceValue={state.maxPrice} 
                minBedroomsValue={state.minBedrooms} 
                maxBedroomsValue={state.maxBedrooms}
            />
            <div id="mapPanel">
                <ToggleViewNav />
                <div id="mapContainer">
                    <div id="mapClipPath">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapView