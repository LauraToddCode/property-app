import React from "react";
import { Link, useRouteMatch } from "react-router-dom";


function ToggleViewNav() {
    let { url } = useRouteMatch();

    return (
        <div className="navToggles">
            <Link to="/property-app" className="navTab" id="listTab">
                <p>List View</p>
            </Link>
            <Link to="/property-app/MapView" className="navTab" id="mapTab">
                <p>Map View</p>
            </Link>
        </div>
    )
}

export default ToggleViewNav