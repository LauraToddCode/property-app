import React from "react";
import { NavLink } from "react-router-dom";


function ToggleViewNav() {

    return (
        <div className="navToggles">
            <NavLink to="/property-app" className="navTab" id="listTab">
                <p>List View</p>
            </NavLink>
            <NavLink to="/map-view" className="navTab" id="mapTab">
                <p>Map View</p>
            </NavLink>
        </div>
    )
}

export default ToggleViewNav