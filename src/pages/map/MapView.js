import React, { Suspense, lazy } from "react"

const Filters = lazy(() => import("../../common/Filters"))
const ToggleViewNav = lazy(() => import("../../common/ToggleViewNav"))
const Map = lazy(() => import("./Map/Map"))

function MapView() {
	const [state, setState] = React.useState({
		minPrice: 0,
		maxPrice: 1000000,
		minBedrooms: 1,
		maxBedrooms: 10,
	})

	function handleChange(evt) {
		const value = evt.target.value
		setState({
			...state,
			[evt.target.name]: value,
		})
	}

	return (
		<div className="appContainer">
			<Suspense fallback={<div></div>}>
				<Filters
					handleChange={handleChange}
					minPriceValue={state.minPrice}
					maxPriceValue={state.maxPrice}
					minBedroomsValue={state.minBedrooms}
					maxBedroomsValue={state.maxBedrooms}
				/>
				<div id="mapPanel">
					<ToggleViewNav />
					<div id="mapContainer">
						<div id="mapClipPath">
							<Map
								minPrice={state.minPrice}
								maxPrice={state.maxPrice}
								minBedrooms={state.minBedrooms}
								maxBedrooms={state.maxBedrooms}
							/>
						</div>
					</div>
				</div>
			</Suspense>
		</div>
	)
}

export default MapView
