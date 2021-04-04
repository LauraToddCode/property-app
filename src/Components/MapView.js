import React from "react";
import Filters from "./Filters";
import Map from "./MapView/Map"
import ToggleViewNav from "./ToggleViewNav";

function MapView() {
    return (
        <div className="appContainer">
            <ToggleViewNav />
                <div id="mapContainer">
                    <div id="mapClipPath">
                        <Map />
                    </div>
                </div>
        </div>
    )
}

export default MapView