import React from "react";
import Filters from "./Filters";
import PropertiesMap from "./MapView/PropertiesMap"
import ToggleViewNav from "./ToggleViewNav";

function MapView() {
    return (
        <div className="appContainer">
            <ToggleViewNav />
            <div className="MuiPaper-elevation3 listViewList mapViewList">
                <PropertiesMap />
            </div>
        </div>
    )
}

export default MapView