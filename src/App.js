import React from "react";
import { Route } from "react-router-dom";
import ListView from "./ListView";
import ToggleViewNav from "./Components/ToggleViewNav";

function App() {
    return (
        <div>
            <ToggleViewNav />
            <Route exact path="/property-app" component={ ListView } />
        </div>
    )
}

export default App