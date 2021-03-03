import React from "react";
import { Route } from "react-router-dom";
import ListView from "./Components/ListView";
import MapView from "./Components/MapView";
import PropertyProfile from "./Components/PropertyProfile";
import Header from "./Components/Header";
import "./stylesheet.css";

function App() {
    return (
        <div>
            <Header />
            <Route exact path="/property-app" component={ ListView } />
            <Route exact path="/map-view" component={ MapView } />
            <Route exact path="/property-profile" component={ PropertyProfile } />
        </div>
    )
}

export default App