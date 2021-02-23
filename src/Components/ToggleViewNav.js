import React from "react";
import { NavLink } from "react-router-dom";

function ToggleViewNav() {
    return (
        <div className="navToggles">
            <NavLink to="/property-app" activeClassName="active" className="navTab">
                <p>List View</p>
            </NavLink>
            <NavLink to="/map-view" activeClassName="active" className="navTab">
                <p>Map View</p>
            </NavLink>
        </div>
    )
}

export default ToggleViewNav