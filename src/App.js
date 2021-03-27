import React, { useState } from "react";
import { Route } from "react-router-dom";
import ListView from "./Components/ListView";
import MapView from "./Components/MapView";
import PropertyProfile from "./Components/PropertyProfile";
import Header from "./Components/Header";
import SavedProperties from "./Components/SavedProperties";
import "./stylesheet.css";

function App() {

    return (
        <div>
            <Header/>
            <Route exact path="/property-app" component={ ListView } />
            <Route exact path="/map-view" component={ MapView } />
            <Route exact path="/property-profile" component= { PropertyProfile } />
            <Route exact path="/saved-properties" component={ SavedProperties } />
        </div>
    )
}

export default App