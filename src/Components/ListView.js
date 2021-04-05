import React from "react";
import properties from "./properties.json";
import ListViewCard from "./ListView/ListViewCard";
import ToggleViewNav from "./ToggleViewNav";
import Filters from "./Filters";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";


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

function ListView({ products }) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        minPrice: 0,
        maxPrice: 1000000,
        minBedrooms: 1,
        maxBedrooms: 10
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    }

    // conditions for a property to be valid within parameters of filters
    const validProperty = (price, beds) => price >= state.minPrice && price <= state.maxPrice && beds >= state.minBedrooms && beds <= state.maxBedrooms


    // set state for 'sort' dropdown
    const [sortedProperties, setSortedProperties] = React.useState(products)

    const handleSort = (event) => {
        let sortBy = event.target.value
        let sorted = []
        if (sortBy == "priceHighToLow") {
            sorted = products.sort((a, b) => (b["price"] > a["price"]) ? 1 : ((a["price"] > b["price"]) ? -1 : 0))
            console.log(sorted)
            setSortedProperties({sortedProperties: sorted})
        } else if (sortBy == "priceLowToHigh") {
            sorted = products.sort((a, b) => (a["price"] > b["price"]) ? 1 : ((b["price"] > a["price"]) ? -1 : 0))
            console.log(sorted)
            setSortedProperties({sortedProperties: sorted})
        } else if (sortBy == "bedsHighToLow") {
            sorted = products.sort((a, b) => (b["bedrooms"] > a["bedrooms"]) ? 1 : ((a["bedrooms"] > b["bedrooms"]) ? -1 : 0))
            console.log(sorted)
            setSortedProperties({sortedProperties: sorted})
        } else if (sortBy == "bedsLowToHigh") {
            sorted = products.sort((a, b) => (a["bedrooms"] > b["bedrooms"]) ? 1 : ((b["bedrooms"] > a["bedrooms"]) ? -1 : 0))
            console.log(sorted)
            setSortedProperties({sortedProperties: sorted})
        }
    }


    return (
        <div className="appContainer">
            <Filters 
                handleChange={handleChange} 
                minPriceValue={state.minPrice} 
                maxPriceValue={state.maxPrice} 
                minBedroomsValue={state.minBedrooms} 
                maxBedroomsValue={state.maxBedrooms}
            />

            <div>
                <ToggleViewNav />
                
                <div className="listViewList">
                    <FormControl className={classes.formControl}>
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
                    {products.map(property => validProperty(property.price, property.bedrooms) && (
                        <ListViewCard 
                            key={property.id}
                            productData={property}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.save.products
    }
}

export default connect(mapStateToProps)(ListView);