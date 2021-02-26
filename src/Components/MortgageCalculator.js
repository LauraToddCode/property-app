import React from "react";
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


// styling for input boxes from Materials UI
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
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



function MortgageCalculator(props) {
    // styling for input boxes
    const classes = useStyles();

    // initialise state for input box values
    const [values, setValues] = React.useState({
        propertyPrice: "200000",
        deposit: "100000",
        years: "25",
        interestRate: "3",
        repaymentType: "Repayments"
    });

    // set values on change for input boxes
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    let totalMonths = 12 * Number(values.years);
    let interestPerMonth = Number(values.interestRate/100)/12;
    let interestPerMonthPlus1 = interestPerMonth + 1;
    let interestPowMonths = Math.pow(interestPerMonthPlus1,totalMonths);
    let amountToPay = Number(values.propertyPrice - values.deposit)
    let numerator = amountToPay*interestPerMonth*interestPowMonths;
    let denominator = interestPowMonths - 1;
    let repaymentResult = (numerator/denominator).toFixed(2);
    let interestResult = amountToPay*interestPerMonth

    const repayment = values.repaymentType == "Repayment" ? "show" : "hide";
    const interest = values.repaymentType == "Interest" ? "show" : "hide";

    return (
        <Paper className={classes.root + " mortgageCalculator"}>
            <div>
                <div>
                    <TextField
                    label="Total Property Price"
                    defaultValue={props.propertyPrice}
                    variant="outlined"
                    className={clsx(classes.margin, classes.textField)}
                    InputProps={{
                        startAdornment: <InputAdornment  className={classes.adornment} position="start">£</InputAdornment>,
                    }}
                    onChange={handleChange("propertyPrice")}
                    />
                    <TextField
                    label="Deposit"
                    defaultValue="100000"
                    variant="outlined"
                    className={clsx(classes.margin, classes.textField)}
                    InputProps={{
                        startAdornment: <InputAdornment  className={classes.adornment} position="start">£</InputAdornment>,
                    }}
                    onChange={handleChange("deposit")}
                    />
                </div>
                <div>
                    <TextField
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
                    label="Interest Rate"
                    defaultValue="3"
                    variant="outlined"
                    className={clsx(classes.margin, classes.textField)}
                    InputProps={{
                        endAdornment: <InputAdornment  className={classes.adornment} position="end">%</InputAdornment>,
                    }}
                    onChange={handleChange("interestRate")}
                    />
                </div>
                
            </div>              
            
            <div className="resultContainer">
                <RadioGroup aria-label="repaymentType" defaultValue="Repayment" onChange={handleChange("repaymentType")}>
                    <FormControlLabel name="Repayment" value="Repayment" control={<Radio />} label="Repayment" />
                    <FormControlLabel name="Interest" value="Interest" control={<Radio />} label="Interest Only" />
                </RadioGroup>
                <p className="mortgageLargeText">You would pay  
                    <span className={repayment + " mortgageAmount"}>£{repaymentResult}</span>
                    <span className={interest + " mortgageAmount"}>£{interestResult}</span> /month
                </p>
                <p className="mortgageSmallText">over the course of {values.years} years</p>
            </div>
        </Paper>
    )
}

export default MortgageCalculator;