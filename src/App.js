import React, { Suspense, lazy } from "react";
import { Route, Redirect, Switch, BrowserRouter as Router } from "react-router-dom";
import "./stylesheet.css";
import { connect } from "react-redux";

const Header = lazy(() => import("./Components/Header"));
const ListView = lazy(() => import("./Components/ListView"));
const MapView = lazy(() => import("./Components/MapView"));
const PropertyProfile = lazy(() => import("./Components/PropertyProfile"));
const Saved = lazy(() => import("./Components/Saved"));


function App({ currentItem }) {

    return (
        <Router>
            <Suspense fallback={<div></div>}>
                <Header/>
                <Switch>
                    <Route exact path="/property-app" component={ ListView } />
                    <Route exact path="/map-view" component={ MapView } />
                    <Route exact path="/saved" component= { Saved } />
                    {!currentItem ? (
                        <Redirect to="/property-app" />
                    ): (
                        <Route exact path="/property-profile/:id" component= { PropertyProfile } />
                    )}
                </Switch>
            </Suspense>
        </Router>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.save.currentItem
    }
}

export default connect(mapStateToProps)(App);