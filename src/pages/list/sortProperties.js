export function sortProperties(sortBy, properties, setSortedProperties) {
	let sorted = []

	if (sortBy === "priceHighToLow") {
		sorted = properties.sort((a, b) =>
			b["price"] > a["price"] ? 1 : a["price"] > b["price"] ? -1 : 0
		)
		setSortedProperties({ sortedProperties: sorted })
	} else if (sortBy === "priceLowToHigh") {
		sorted = properties.sort((a, b) =>
			a["price"] > b["price"] ? 1 : b["price"] > a["price"] ? -1 : 0
		)
		setSortedProperties({ sortedProperties: sorted })
	} else if (sortBy === "bedsHighToLow") {
		sorted = properties.sort((a, b) =>
			b["bedrooms"] > a["bedrooms"] ? 1 : a["bedrooms"] > b["bedrooms"] ? -1 : 0
		)
		setSortedProperties({ sortedProperties: sorted })
	} else if (sortBy === "bedsLowToHigh") {
		sorted = properties.sort((a, b) =>
			a["bedrooms"] > b["bedrooms"] ? 1 : b["bedrooms"] > a["bedrooms"] ? -1 : 0
		)
		setSortedProperties({ sortedProperties: sorted })
	}
}
