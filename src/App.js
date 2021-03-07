import React, { useState } from "react";
import { Route } from "react-router-dom";
import ListView from "./Components/ListView";
import MapView from "./Components/MapView";
import PropertyProfile from "./Components/PropertyProfile";
import Header from "./Components/Header";
import SavedProperties from "./Components/SavedProperties";
import "./stylesheet.css";

function App() {
    
    const [ savedItems, setSavedItems ] = useState([localStorage.getItem('valueInLocalStorage')] || [])

    React.useEffect(() => {
        localStorage.setItem('valueInLocalStorage', savedItems);
    }, [savedItems]);
    
    const savedProperties = (event) => {
        setSavedItems([event.target.id].concat(savedItems))
    }

    return (
        <div>
            <Header savedItems={savedItems}/>
            <Route exact path="/property-app" component={ ListView } />
            <Route exact path="/map-view" component={ MapView } />
            <Route exact path="/property-profile" 
                render={() => (
                    <PropertyProfile onClick={savedProperties} savedItems={savedItems} />
                )}
            />
            <Route exact path="/saved-properties" component={ SavedProperties } savedItems={savedItems} />
        </div>
    )
}

export default App