import React from "react";
import prices from "./priceFilters.json";
import bedrooms from "./noOfBedroomsFilter.json";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';


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



function Filters(props) {
    const classes = useStyles();

    return (
        <Paper elevation={3} id="filters">
            <FormControl className={classes.formControl + " indiFilter"}>
                <InputLabel id="demo-simple-select-label">Min Price:</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select" 
                    name="minPrice"
                    value={props.minPriceValue} 
                    onChange={props.handleChange}
                >
                    {prices.map(price => <MenuItem key={price.price} value={price.price}>£{price.price}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl + " indiFilter"}>
                <InputLabel id="demo-simple-select-label">Max Price:</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="maxPrice"
                    value={props.maxPriceValue} 
                    onChange={props.handleChange}
                >
                    {prices.map(price => <MenuItem key={price.price} value={price.price}>£{price.price}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl + " indiFilter"}>
                <InputLabel id="demo-simple-select-label">Min no. of bedrooms:</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="minBedrooms"
                    value={props.minBedroomsValue} 
                    onChange={props.handleChange}
                >
                    {bedrooms.map(num => <MenuItem key={num.bedrooms} value={num.bedrooms}>{num.bedrooms}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl + " indiFilter"}>
                <InputLabel id="demo-simple-select-label">Max no. of bedrooms:</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="maxBedrooms"
                    value={props.maxBedroomsValue} 
                    onChange={props.handleChange}
                >
                    {bedrooms.map(num => <MenuItem key={num.bedrooms} value={num.bedrooms}>{num.bedrooms}</MenuItem>)}
                </Select>
            </FormControl>                   
        </Paper>
    )
} 


export default Filters