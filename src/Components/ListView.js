import React from "react";
import properties from "./properties.json";
import ListViewCard from "./ListView/ListViewCard";
import ToggleViewNav from "./ToggleViewNav";
import Filters from "./Filters";
import { ListingsContext } from "../ListingsContext";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
}));

function ListView() {
    const classes = useStyles();

    const [minPrice, setMinPrice] = React.useState(0)

    const handleMinPriceChange = (event) => {
        setMinPrice({ minPrice: event.target.value });
    };

    const [maxPrice, setMaxPrice] = React.useState(1000000)

    const handleMaxPriceChange = (event) => {
        setMaxPrice({ maxPrice: event.target.value });
    };

    const [minBedrooms, setMinBedrooms] = React.useState(1)

    const handleMinBedChange = (event) => {
        setMinBedrooms({ minBedrooms: event.target.value });
    };

    const [maxBedrooms, setMaxBedrooms] = React.useState(10)

    const handleMaxBedChange = (event) => {
        setMaxBedrooms({ maxBedrooms: event.target.value });
    };

    const validProperty = (price, beds) => price >= minPrice && price <= maxPrice && beds >= minBedrooms && beds <= maxBedrooms

    const [sortedProperties, setSortedProperties] = React.useState(properties)

    const handleSort = (event) => {
        let sortBy = event.target.value
        let sorted = []
        if (sortBy == "priceHighToLow") {
            sorted = properties.sort((a, b) => (b["price"] > a["price"]) ? 1 : ((a["price"] > b["price"]) ? -1 : 0))
            setSortedProperties({sortedProperties: sorted})
        } else if (sortBy == "priceLowToHigh") {
            sorted = properties.sort((a, b) => (a["price"] > b["price"]) ? 1 : ((b["price"] > a["price"]) ? -1 : 0))
            setSortedProperties({sortedProperties: sorted})
        } else if (sortBy == "bedsHighToLow") {
            sorted = properties.sort((a, b) => (b["bedrooms"] > a["bedrooms"]) ? 1 : ((a["bedrooms"] > b["bedrooms"]) ? -1 : 0))
            setSortedProperties({sortedProperties: sorted})
        } else if (sortBy == "bedsLowToHigh") {
            sorted = properties.sort((a, b) => (a["bedrooms"] > b["bedrooms"]) ? 1 : ((b["bedrooms"] > a["bedrooms"]) ? -1 : 0))
            setSortedProperties({sortedProperties: sorted})
        }
    }

    return (
        <div className="appContainer">
            <Filters 
                handleChange={handleMinPriceChange} 
                handleMaxPriceChange={handleMaxPriceChange} 
                handleMinBedChange={handleMinBedChange} 
                handleMaxBedChange={handleMaxBedChange} 
                minPriceValue={minPrice} 
                maxPriceValue={maxPrice} 
                minBedroomsValue={minBedrooms} 
                maxBedroomsValue={maxBedrooms}
            />
            <ToggleViewNav />
            
            <div className="MuiPaper-elevation3 listViewList">
                <FormControl className={classes.formControl + " indiFilter"}>
                    <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
                    <Select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue="bedsHighToLow"
                        onChange={handleSort}
                    >
                        <MenuItem key="0" value="priceHighToLow">Price - High to Low</MenuItem>
                        <MenuItem key="1" value="priceLowToHigh">Price - Low to High</MenuItem>
                        <MenuItem key="2" value="bedsHighToLow">Bedrooms - High to Low</MenuItem>
                        <MenuItem key="3" value="bedsLowToHigh">Bedrooms - Low to High</MenuItem>
                    </Select>
                </FormControl>
                {/*properties.sort((a, b) => (b["price"] > a["price"]) ? 1 : ((a["price"] > b["price"]) ? -1 : 0))*/}
                {properties.map(property => validProperty(property.price, property.bedrooms) && (
                    <ListingsContext.Consumer>
                        {(context) => (
                            <ListViewCard 
                                id={property.id}
                                mainImg={process.env.PUBLIC_URL + "/images/properties/" + property.imgs[0]} 
                                imgAlt={property.imgAlt} 
                                displayPrice={property.displayPrice} 
                                type={property.type} 
                                propertyDesc={property.propertyDesc} 
                                bedrooms={property.bedrooms} 
                                bathrooms={property.bathrooms} 
                                livingRooms={property.livingRooms} 
                                key={property.id}
                                onClick={context.getId}
                            />
                        )}
                    </ListingsContext.Consumer>
                ))}
                
            </div>
            
        </div>
    )
}

export default ListView