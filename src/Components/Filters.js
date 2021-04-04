import React from "react";
import prices from "./priceFilters.json";
import bedrooms from "./noOfBedroomsFilter.json";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormatAlignCenterOutlined } from "@material-ui/icons";


function Filters(props) {

    return (
        <div id="filters">
            <h3 id="startSearch">start your search</h3>
            <div id="filterDropdowns">
                <form className="indiFilter">
                    <label id="demo-simple-select-label">Min Price:</label>
                    <select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select" 
                        name="minPrice"
                        value={props.minPriceValue} 
                        onChange={props.handleChange}
                    >
                        {prices.map(price => <option key={price.price} value={price.price}>£{price.price}</option>)}
                    </select>
                </form>
                <form className="indiFilter">
                    <label id="demo-simple-select-label">Max Price:</label>
                    <select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="maxPrice"
                        value={props.maxPriceValue} 
                        onChange={props.handleChange}
                    >
                        {prices.map(price => <option key={price.price} value={price.price}>£{price.price}</option>)}
                    </select>
                </form>
                <form className="indiFilter">
                    <label id="demo-simple-select-label">Min no. of bedrooms:</label>
                    <select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="minBedrooms"
                        value={props.minBedroomsValue} 
                        onChange={props.handleChange}
                    >
                        {bedrooms.map(num => <option key={num.bedrooms} value={num.bedrooms}>{num.bedrooms}</option>)}
                    </select>
                </form>
                <form className="indiFilter">
                    <label id="demo-simple-select-label">Max no. of bedrooms:</label>
                    <select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="maxBedrooms"
                        value={props.maxBedroomsValue} 
                        onChange={props.handleChange}
                    >
                        {bedrooms.map(num => <option key={num.bedrooms} value={num.bedrooms}>{num.bedrooms}</option>)}
                    </select>
                </form>         
            </div>          
        </div>
    )
} 


export default Filters