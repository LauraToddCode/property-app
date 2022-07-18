import "./stylesheet.css"

import React, { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

import { connect } from "react-redux"

const Header = lazy(() => import("./common/Header"))
const ListView = lazy(() => import("./pages/list/ListView"))
const MapView = lazy(() => import("./pages/map/MapView"))
const PropertyProfile = lazy(() =>
	import("./pages/property-profile/PropertyProfile")
)
const Saved = lazy(() => import("./pages/saved/Saved"))

function App({ currentItem }) {
	return (
		<Suspense fallback={<div></div>}>
			<Header />
			<Routes>
				<Route path="/property-app" element={<ListView />} />
				<Route path="/map-view" element={<MapView />} />
				<Route path="/saved" element={<Saved />} />
				{currentItem && (
					<Route
						exact
						path="/property-profile/:id"
						element={<PropertyProfile />}
					/>
				)}
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
