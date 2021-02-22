import React from "react";
import Filters from "./Components/Filters";
import PropertiesMap from "./Components/MapView/PropertiesMap"
import ToggleViewNav from "./Components/ToggleViewNav";

function MapView() {
    return (
        <div className="appContainer">
            <ToggleViewNav />
            <h1>I'm some info</h1>
        </div>
    )
}

export default MapView