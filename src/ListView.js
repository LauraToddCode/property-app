import React from "react";
import propertiesData from "./properties.json";
import ListViewCard from "./Components/ListView/ListViewCard";
import prices from "./priceFilters.json";
import bedrooms from "./noOfBedroomsFilter.json";
import ToggleViewNav from "./Components/ToggleViewNav";

class ListView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: propertiesData,
            minPrice: 25000,
            maxPrice: 1000000,
            minBedrooms: 1,
            maxBedrooms: 10,
        }
        this.handleMinPriceChange = this.handleMinPriceChange.bind(this)
        this.handleMaxPriceChange = this.handleMaxPriceChange.bind(this)
        this.handleMinBedChange = this.handleMinBedChange.bind(this)
        this.handleMaxBedChange = this.handleMaxBedChange.bind(this)
    }

    handleMinPriceChange = (event) => {
        this.setState({
            minPrice: event.target.value
        })
    }

    handleMaxPriceChange = (event) => {
        this.setState({
            maxPrice: event.target.value
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
            <div className="appContainer">
                <div id="filters">
                    <div className="indiFilter">
                        <label>Min Price:</label>
                        <select value={minPrice} onChange={this.handleMinPriceChange}>
                            {prices.map(price => <option key={price.price} value={price.price}>£{price.price}</option>)}
                        </select>
                    </div>
                    <div className="indiFilter">
                        <label>Max Price:</label>
                        <select value={maxPrice} onChange={this.handleMaxPriceChange}>
                            {prices.map(price => <option key={price.price} value={price.price}>£{price.price}</option>)}
                        </select>
                    </div>
                    <div className="indiFilter">
                        <label>Min no. of bedrooms:</label>
                        <select value={minBedrooms} onChange={this.handleMinBedChange}>
                            {bedrooms.map(num => <option key={num.bedrooms} value={num.bedrooms}>{num.bedrooms}</option>)}
                        </select>
                    </div>
                    <div className="indiFilter">
                        <label>Max no. of bedrooms:</label>
                        <select value={maxBedrooms} onChange={this.handleMaxBedChange}>
                            {bedrooms.map(num => <option key={num.bedrooms} value={num.bedrooms}>{num.bedrooms}</option>)}
                        </select>
                    </div>                    
                </div>
                <ToggleViewNav />
                <div className="listViewList">
                    {properties.map(property => validProperty(property.price, property.bedrooms) && (
                        <div>
                            <ListViewCard mainImg={process.env.PUBLIC_URL + "/images/properties/" + property.mainImg} imgAlt={property.imgAlt} displayPrice={property.displayPrice} type={property.type} propertyDesc={property.propertyDesc} bedrooms={property.bedrooms} bathrooms={property.bathrooms} livingRooms={property.livingRooms} key={property.id} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ListView