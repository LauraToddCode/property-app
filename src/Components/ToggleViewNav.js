import React from "react";
import { Link } from "react-router-dom";

function ToggleViewNav() {
    return (
        <div>
            <Link to="/property-app">List View</Link>
            <Link to="/map-view">Map View</Link>
        </div>
    )
}

export default ToggleViewNav