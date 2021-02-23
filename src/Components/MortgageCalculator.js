import React from "react";
import Paper from '@material-ui/core/Paper';import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
}));

function MortgageCalculator() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        propertyPrice: "",
        deposit: "",
        years: "",
        interestRate: "",
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Paper className={classes.root}>              
            <TextField
            id="outlined"
            label="Total Property Price"
            defaultValue="1000000"
            variant="outlined"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
                startAdornment: <InputAdornment  className={classes.adornment} position="start">£</InputAdornment>,
            }}
            onChange={handleChange("propertyPrice")}
            />
            <TextField
            id="outlined"
            label="Deposit"
            defaultValue="100000"
            variant="outlined"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
                startAdornment: <InputAdornment  className={classes.adornment} position="start">£</InputAdornment>,
            }}
            onChange={handleChange("deposit")}
            />
            <TextField
            id="outlined"
            label="Mortgage Term"
            defaultValue="25"
            variant="outlined"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
                endAdornment: <InputAdornment  className={classes.adornment} position="end">years</InputAdornment>,
            }}
            onChange={handleChange("years")}
            />
            <TextField
            id="outlined"
            label="Interest Rate"
            defaultValue="3"
            variant="outlined"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
                endAdornment: <InputAdornment  className={classes.adornment} position="end">%</InputAdornment>,
            }}
            onChange={handleChange("interestRate")}
            />
            <p>Property price is: {values.propertyPrice}</p>
        </Paper>
    )
}

export default MortgageCalculator;