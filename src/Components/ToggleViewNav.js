import React from "react";
import { Link } from "react-router-dom";

function ToggleViewNav() {
    return (
        <div className="navToggles">
            <Link to="/property-app" className="navToggleLinks">List View</Link>
            <Link to="/map-view" className="navToggleLinks">Map View</Link>
        </div>
    )
}

export default ToggleViewNav