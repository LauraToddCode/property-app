import {
	GoogleMap,
	InfoWindow,
	LoadScript,
	Marker,
} from "@react-google-maps/api"
import React, { useState } from "react"
import { addToSaved, loadCurrentItem } from "../../../redux/save/save-actions"

import { MarkerInfo } from "./MarkerInfo"
import { connect } from "react-redux"
import properties from "../../../common/content/properties.json"
import { useNavigate } from "react-router-dom"

const mapStateToProps = (state) => {
	return {
		minPrice: state.save.minPrice,
		maxPrice: state.save.maxPrice,
		minBedrooms: state.save.minBedrooms,
		maxBedrooms: state.save.maxBedrooms,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToSaved: (id) => dispatch(addToSaved(id)),
		loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
	}
}

const center = { lat: 51.23651480350905, lng: -0.5703780104611352 }

const containerStyle = {
	width: "100%",
	height: "100%",
}

function Map({
	minPrice,
	maxPrice,
	minBedrooms,
	maxBedrooms,
	addToSaved,
	loadCurrentItem,
}) {
	const history = useNavigate()
	const validProperty = (price, beds) =>
		price >= minPrice &&
		price <= maxPrice &&
		beds >= minBedrooms &&
		beds <= maxBedrooms

	const [selectedProperty, setSelectedProperty] = useState(null)

	function redirectToPropertyPage(href) {
		loadCurrentItem(selectedProperty)
		history(href)
	}

	const API_KEY = process.env.REACT_APP_API_KEY

	return (
		<LoadScript googleMapsApiKey={API_KEY}>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
				{properties.map(
					(property) =>
						validProperty(property.price, property.bedrooms) && (
							<Marker
								key={property.id}
								position={{
									lat: property.lat,
									lng: property.lng,
								}}
								onClick={() => {
									setSelectedProperty(property)
								}}
								icon={{
									url: "https://i.imgur.com/FpHIBa7.png",
								}}
							/>
						)
				)}

				{selectedProperty && (
					<InfoWindow
						position={{
							lat: selectedProperty.lat,
							lng: selectedProperty.lng,
						}}
						onCloseClick={() => {
							setSelectedProperty(null)
						}}
					>
						<MarkerInfo
							key={selectedProperty.id}
							id={selectedProperty.id}
							img={selectedProperty.imgs[0]}
							price={selectedProperty.displayPrice}
							type={selectedProperty.type}
							beds={selectedProperty.bedrooms}
							baths={selectedProperty.bathrooms}
							living={selectedProperty.livingRooms}
							findOutMore={redirectToPropertyPage}
							saveItem={() => addToSaved(selectedProperty.id)}
						/>
					</InfoWindow>
				)}
			</GoogleMap>
		</LoadScript>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
