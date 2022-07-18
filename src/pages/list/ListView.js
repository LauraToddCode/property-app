import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	useTheme,
} from "@mui/material"
import React, { Suspense, lazy } from "react"

import { connect } from "react-redux"
import { sortMenuItems } from "./sortMenuItems"
import { sortProperties } from "./sortProperties"

const Filters = lazy(() => import("../../common/Filters"))
const ToggleViewNav = lazy(() => import("../../common/ToggleViewNav"))
const ListViewCard = lazy(() => import("./ListViewCard"))

function ListView({
	properties,
	minPrice,
	maxPrice,
	minBedrooms,
	maxBedrooms,
}) {
	const theme = useTheme()

	const formControlStyles = {
		margin: theme.spacing(1),
		minWidth: 120,
	}

	// conditions for a property to be valid within parameters of filters
	const validProperty = (price, beds) =>
		price >= minPrice &&
		price <= maxPrice &&
		beds >= minBedrooms &&
		beds <= maxBedrooms

	// set state for 'sort' dropdown
	// eslint-disable-next-line no-unused-vars
	const [sortedProperties, setSortedProperties] = React.useState(properties)

	const handleSort = (event) => {
		let sortBy = event.target.value
		sortProperties(sortBy, properties, setSortedProperties)
	}

	return (
		<div className="appContainer">
			<Suspense fallback={<div></div>}>
				<Filters />
				<div>
					<ToggleViewNav />

					<div className="listViewList">
						<FormControl sx={formControlStyles}>
							<InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								defaultValue="bedsHighToLow"
								onChange={handleSort}
							>
								{sortMenuItems.map((item, key) => (
									<MenuItem key={key} value={item.value}>
										{item.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						{properties.map(
							(property) =>
								validProperty(property.price, property.bedrooms) && (
									<ListViewCard key={property.id} propertyData={property} />
								)
						)}
					</div>
				</div>
			</Suspense>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		properties: state.save.properties,
		minPrice: state.save.minPrice,
		maxPrice: state.save.maxPrice,
		minBedrooms: state.save.minBedrooms,
		maxBedrooms: state.save.maxBedrooms,
	}
}

export default connect(mapStateToProps)(ListView)
