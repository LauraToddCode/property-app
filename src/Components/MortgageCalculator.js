import React from "react";
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Line } from 'react-chartjs-2';

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
        propertyPrice: props.propertyPrice,
        deposit: "100000",
        years: "25",
        interestRate: "3",
        repaymentType: "Repayment"
    });

    // set values on change for input boxes
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // caluclations for the monthly repayments
    let totalMonths = 12 * Number(values.years);
    let interestPerMonth = Number(values.interestRate/100)/12;
    let interestPerMonthPlus1 = interestPerMonth + 1;
    let interestPowMonths = Math.pow(interestPerMonthPlus1,totalMonths);
    let amountToPay = Number(values.propertyPrice - values.deposit)
    let numerator = amountToPay*interestPerMonth*interestPowMonths;
    let denominator = interestPowMonths - 1;
    let repaymentResult = (numerator/denominator).toFixed(2);
    let interestResult = amountToPay*interestPerMonth

    // class variables to show or hide the correct result depending on which radio button is displayed
    const repayment = values.repaymentType == "Repayment" ? "show" : "hide";
    const interest = values.repaymentType == "Interest" ? "show" : "hide";

    // creates an array of values for the y axis based on interest only
    let interestArr = new Array(Number(values.years + 1)).fill(amountToPay)

    // creates an array of values for the y axis based on repayment
    let repaymentValues = [0];
    for (let i = 0; i < values.years; i++) {
        let arrVal = (repaymentValues[i] + (repaymentResult*12))
        repaymentValues.push(arrVal)
    }

    repaymentValues.reverse();

    // makes an array of the values from the repaymentValues object
    let repaymentArrTemp = Object.values(repaymentValues)
    let repaymentArr = []

    // loops through array to make each value 2 decimal places
    for (let j = 0; j < repaymentArrTemp.length; j++) {
        repaymentArr.push(repaymentArrTemp[j].toFixed(2))
    }

    // decides which array to use for y axis of graph depending on which radio button is selected
    let yAxisValues = values.repaymentType == "Repayment" ? repaymentArr : interestArr;

    // create array of years for x-axis of graph
    let years = [0];
    for (let i = 0; i < values.years; i++) {
        years.push(i + 1)
    }

    return (
        <Paper elevation={3} className={classes.root + " mortgageCalculator"}>
            <div>
                <h2>Mortgage Calculator</h2>
                <div>
                    <div className={classes.root}>
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
                
                <div className="radioResultContainer">
                    <RadioGroup aria-label="repaymentType" defaultValue="Repayment" onChange={handleChange("repaymentType")}>
                        <FormControlLabel name="Repayment" value="Repayment" control={<Radio />} label="Repayment" />
                        <FormControlLabel name="Interest" value="Interest" control={<Radio />} label="Interest Only" />
                    </RadioGroup>
                    <div className="resultContainer">
                        <p className="mortgageLargeText">You would pay  
                            <span className={repayment + " mortgageAmount"}>£{repaymentResult}</span>
                            <span className={interest + " mortgageAmount"}>£{interestResult}</span> /month
                        </p>
                        <p className="mortgageSmallText">over the course of {values.years} years</p>
                    </div>
                </div>
            </div>
            <div className="mortgageChartContainer">
                <Line 
                    className="mortgageChart"
                    legend={{
                        display: false
                    }}
                    data={{
                        label: "none",
                        labels: Object.values(years),
                        datasets: [{
                            data: yAxisValues,
                            backgroundColor: 'rgba(73, 74, 243, 0.2)',
                            borderColor: 'rgba(73, 74, 243, 1)',
                        }],
                    }}
                    options = {{
                        scales: {
                            yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Amount (£)'
                            },
                            ticks: {
                                stepSize: 50000
                            }
                            }],
                            xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Years'
                            }
                            }],
                        }     
                    }}
                />
            </div>
        </Paper>
    )
}

export default MortgageCalculator;