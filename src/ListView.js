import React from "react";
import propertiesData from "./properties.json";
import ListViewCard from "./Components/ListView/ListViewCard";
import ToggleViewNav from "./Components/ToggleViewNav";
import Filters from "./Components/Filters";
import MortgageCalculator from "./Components/MortgageCalculator";

class ListView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: propertiesData,
            minPrice: 0,
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
                <MortgageCalculator propertyPrice="200000"/>
                <Filters handleMinPriceChange={this.handleMinPriceChange} handleMaxPriceChange={this.handleMaxPriceChange} handleMinBedChange={this.handleMinBedChange} handleMaxBedChange={this.handleMaxBedChange} minPriceValue={minPrice} maxPriceValue={maxPrice} minBedroomsValue={minBedrooms} maxBedroomsValue={maxBedrooms}/>
                <ToggleViewNav />
                <div className="MuiPaper-elevation3 listViewList">
                    {properties.map(property => validProperty(property.price, property.bedrooms) && (
                        <ListViewCard mainImg={process.env.PUBLIC_URL + "/images/properties/" + property.mainImg} imgAlt={property.imgAlt} displayPrice={property.displayPrice} type={property.type} propertyDesc={property.propertyDesc} bedrooms={property.bedrooms} bathrooms={property.bathrooms} livingRooms={property.livingRooms} key={property.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default ListView