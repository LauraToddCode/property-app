import { bedrooms, prices } from "./content/filters.content"
import {
	getMaxBedsValue,
	getMaxPriceValue,
	getMinBedsValue,
	getMinPriceValue,
} from "../redux/save/save-actions"

import React from "react"
import { connect } from "react-redux"

function Filters({
	getMinPriceValue,
	getMaxPriceValue,
	getMinBedsValue,
	getMaxBedsValue,
	minPrice,
	maxPrice,
	minBedrooms,
	maxBedrooms,
}) {
	return (
		<div id="filters">
			<h3 id="startSearch">start your search</h3>
			<div id="filterDropdowns">
				<form className="indiFilter">
					<label>Min Price:</label>
					<select
						name="minPrice"
						value={minPrice}
						onChange={(event) =>
							getMinPriceValue(parseInt(event.currentTarget.value))
						}
					>
						{prices.map((price) => (
							<option key={price} value={price}>
								£{price}
							</option>
						))}
					</select>
				</form>
				<form className="indiFilter">
					<label>Max Price:</label>
					<select
						name="maxPrice"
						value={maxPrice}
						onChange={(event) =>
							getMaxPriceValue(parseInt(event.currentTarget.value))
						}
					>
						{prices.map((price) => (
							<option key={price} value={price}>
								£{price}
							</option>
						))}
					</select>
				</form>
				<form className="indiFilter">
					<label>Min no. of bedrooms:</label>
					<select
						name="minBedrooms"
						value={minBedrooms}
						onChange={(event) =>
							getMinBedsValue(parseInt(event.currentTarget.value))
						}
					>
						{bedrooms.map((num) => (
							<option key={num} value={num}>
								{num}
							</option>
						))}
					</select>
				</form>
				<form className="indiFilter">
					<label>Max no. of bedrooms:</label>
					<select
						name="maxBedrooms"
						value={maxBedrooms}
						onChange={(event) =>
							getMaxBedsValue(parseInt(event.currentTarget.value))
						}
					>
						{bedrooms.map((num) => (
							<option key={num} value={num}>
								{num}
							</option>
						))}
					</select>
				</form>
			</div>
		</div>
	)
}

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
		getMinPriceValue: (value) => dispatch(getMinPriceValue(value)),
		getMaxPriceValue: (value) => dispatch(getMaxPriceValue(value)),
		getMinBedsValue: (value) => dispatch(getMinBedsValue(value)),
		getMaxBedsValue: (value) => dispatch(getMaxBedsValue(value)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
