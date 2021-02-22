import React from "react";
import prices from "./priceFilters.json";
import bedrooms from "./noOfBedroomsFilter.json";

function Filters(props) {
    return (
        <div id="filters">
            <div className="indiFilter">
                <label>Min Price:</label>
                <select value={props.minPriceValue} onChange={props.handleMinPriceChange}>
                    {prices.map(price => <option key={price.price} value={price.price}>£{price.price}</option>)}
                </select>
            </div>
            <div className="indiFilter">
                <label>Max Price:</label>
                <select value={props.maxPriceValue} onChange={props.handleMaxPriceChange}>
                    {prices.map(price => <option key={price.price} value={price.price}>£{price.price}</option>)}
                </select>
            </div>
            <div className="indiFilter">
                <label>Min no. of bedrooms:</label>
                <select value={props.minBedroomsValue} onChange={props.handleMinBedChange}>
                    {bedrooms.map(num => <option key={num.bedrooms} value={num.bedrooms}>{num.bedrooms}</option>)}
                </select>
            </div>
            <div className="indiFilter">
                <label>Max no. of bedrooms:</label>
                <select value={props.maxBedroomsValue} onChange={props.handleMaxBedChange}>
                    {bedrooms.map(num => <option key={num.bedrooms} value={num.bedrooms}>{num.bedrooms}</option>)}
                </select>
            </div>                    
        </div>
    )
} 


export default Filters