import React from "react";
import propertiesData from "./properties.json";
import ListViewCard from "./Components/ListView/ListViewCard";
import prices from "./priceFilters.json";
import bedrooms from "./noOfBedroomsFilter.json";

class ListView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: propertiesData,
            minPrice: 25000,
            maxPrice: 25000,
            minBedrooms: 1,
            maxBedrooms: 1,
        }
        this.handleMinPriceChange = this.handleMinPriceChange.bind(this)
        this.handleMaxPriceChange = this.handleMaxPriceChange.bind(this)
        this.handleMinBedChange = this.handleMinBedChange.bind(this)
        this.handleMaxBedChange = this.handleMaxBedChange.bind(this)
    }

    handleMinPriceChange = (event) => {
        const minPriceStr = event.target.value;
        let minPrice = minPriceStr.slice(1, minPriceStr.length);
        minPrice = parseInt(minPrice)
        this.setState({
            minPrice: minPrice
        })
    }

    handleMaxPriceChange = (event) => {
        const maxPriceStr = event.target.value;
        let maxPrice = maxPriceStr.slice(1, maxPriceStr.length);
        maxPrice = parseInt(maxPrice)
        this.setState({
            maxPrice: maxPrice
        })
    }

    handleMinBedChange = (event) => {
        const minBedroom = event.target.value;
        this.setState({
            minBedrooms: minBedroom
        })
    }

    handleMaxBedChange = (event) => {
        const maxBedroom = event.target.value;
        this.setState({
            maxBedrooms: maxBedroom
        })
    }

    render() {
        const { properties, minPrice, maxPrice, minBedrooms, maxBedrooms } = this.state;
        const validProperty = (price, beds) => price >= minPrice && price <= maxPrice && beds >= minBedrooms && beds <= maxBedrooms


        return (
            <div>
                <div>
                    <label>Min Price:</label>
                    <select onChange={this.handleMinPriceChange}>
                        {prices.map(price => <option key={price.price}>£{price.price}</option>)}
                    </select>
                    <label>Max Price:</label>
                    <select onChange={this.handleMaxPriceChange}>
                        {prices.map(price => <option key={price.price}>£{price.price}</option>)}
                    </select>
                    <label>Min no. of bedrooms:</label>
                    <select onChange={this.handleMinBedChange}>
                        {bedrooms.map(num => <option key={num.bedrooms}>{num.bedrooms}</option>)}
                    </select>
                    <label>Max no. of bedrooms:</label>
                    <select onChange={this.handleMaxBedChange}>
                        {bedrooms.map(num => <option key={num.bedrooms}>{num.bedrooms}</option>)}
                    </select>
                </div>
                <p>Min price:{this.state.minPrice}</p>
                <p>Max price:{this.state.maxPrice}</p>
                <p>Min beds:{this.state.minBedrooms}</p>
                <p>Max beds:{this.state.maxBedrooms}</p>
                <div>
                    {properties.map(property => validProperty(property.price, property.bedrooms) && (
                        <div>
                            <ListViewCard mainImg={process.env.PUBLIC_URL + "/images/properties/" + property.mainImg} imgAlt={property.imgAlt} displayPrice={property.displayPrice} cardTitle={property.cardTitle} propertyDesc={property.propertyDesc} key={property.id} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ListView