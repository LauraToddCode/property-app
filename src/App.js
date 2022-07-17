import "./stylesheet.css"

import { Navigate, Route, Routes } from "react-router-dom"
import React, { Suspense, lazy } from "react"

import { connect } from "react-redux"

// import ListView from "src/pages/list/ListView"

const Header = lazy(() => import("./common/Header"))
const ListView = lazy(() => import("./pages/list/ListView"))
const MapView = lazy(() => import("./pages/map/MapView"))
const PropertyProfile = lazy(() => import("./common/PropertyProfile"))
const Saved = lazy(() => import("./pages/saved/Saved"))

function App({ currentItem }) {
	return (
		<Suspense fallback={<div></div>}>
			<Header />
			<Routes>
				<Route path="/property-app" element={<ListView />} />
				<Route path="/map-view" element={<MapView />} />
				<Route path="/saved" element={<Saved />} />
				{/* {!currentItem ? (
					<Navigate to="/property-app" />
				) : (
					<Route path="/property-profile">
						<Route exact path="/:id" element={<PropertyProfile />} />
					</Route>
				)} */}
			</Routes>
		</Suspense>
	)
}

const mapStateToProps = (state) => {
	return {
		currentItem: state.save.currentItem,
	}
}

export default connect(mapStateToProps)(App)
