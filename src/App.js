import React from "react";
import { Route } from "react-router-dom";
import ListView from "./ListView";
import MapView from "./MapView"
import ToggleViewNav from "./Components/ToggleViewNav";
import "./stylesheet.css";

function App() {
    return (
        <div>
            <div id="appContainer">
                <ToggleViewNav />
                <Route exact path="/property-app" component={ ListView } />
                <Route exact path="/map-view" component={ MapView } />
            </div>
        </div>
    )
}

export default App