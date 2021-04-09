import React from "react";
import { Route, Redirect, Switch, BrowserRouter as Router } from "react-router-dom";
import ListView from "./Components/ListView";
import MapView from "./Components/MapView";
import PropertyProfile from "./Components/PropertyProfile";
import Header from "./Components/Header";
import Saved from "./Components/Saved"
import "./stylesheet.css";
import { connect } from "react-redux";

function App({ currentItem }) {

    return (
        <Router>
            <div>
                <Header/>
                    <Switch>
                        <Route exact path="/property-app" component={ ListView } />
                        <Route exact path="/map-view" component={ MapView } />
                        {!currentItem ? (
                            <Redirect to="/property-app" />
                        ): (
                            <Route exact path="/property-profile/:id" component= { PropertyProfile } />
                        )}
                        <Route exact path="/saved" component= { Saved } />
                    </Switch>
            </div>
        </Router>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        currentItem: state.save.currentItem
    }
}

export default connect(mapStateToProps)(App);