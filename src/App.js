import React from "react";
import { Route } from "react-router-dom";
import ListView from "./ListView";
import MapView from "./MapView";
import PropertyProfile from "./PropertyProfile"
import "./stylesheet.css";

function App() {
    return (
        <div>
            <Route exact path="/property-app" component={ ListView } />
            <Route exact path="/map-view" component={ MapView } />
            <Route exact path="/property-profile" component={ PropertyProfile } />
        </div>
    )
}

export default App