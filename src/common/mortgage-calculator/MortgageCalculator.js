import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from "chart.js"
import {
	FormControlLabel,
	InputAdornment,
	Paper,
	Radio,
	RadioGroup,
} from "@mui/material"

import { Line } from "react-chartjs-2"
import React from "react"
import { MortgageTextField } from "./MortgageTextField"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

//TODO - add labels to chart axes

function MortgageCalculator(props) {

	const rootStyles = {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
	}

	// initialise state for input box values
	const [values, setValues] = React.useState({
		propertyPrice: props.propertyPrice,
		deposit: props.propertyPrice * 0.1,
		years: "25",
		interestRate: "3",
		repaymentType: "Repayment",
	})

	// set values on change for input boxes
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}


	// caluclations for the monthly repayments
	const twelveMonths = 12
	const oneHundredPercent = 100
	
	let totalMonths = twelveMonths * Number(values.years)
	let interestPerMonth = Number(values.interestRate / oneHundredPercent) / twelveMonths
	let interestPerMonthPlus1 = interestPerMonth + 1
	let interestPowMonths = Math.pow(interestPerMonthPlus1, totalMonths)
	let amountToPay = Number(values.propertyPrice - values.deposit)
	let numerator = amountToPay * interestPerMonth * interestPowMonths
	let denominator = interestPowMonths - 1
	let repaymentResult = (numerator / denominator).toFixed(2)
	let interestResult = amountToPay * interestPerMonth

	// this is needed to show the result to 2 decimal places
	interestResult = Math.round((interestResult * 100) / 100).toFixed(2)

	// class variables to show or hide the correct result depending on which radio button is displayed
	const repayment = values.repaymentType === "Repayment" ? "show" : "hide"
	const interest = values.repaymentType === "Interest" ? "show" : "hide"

	// creates an array of values for the y axis based on interest only
	let interestArr = new Array(Number(values.years + 1)).fill(amountToPay)

	// creates an array of values for the y axis based on repayment
	let repaymentValues = [0]
	for (let i = 0; i < values.years; i++) {
		let arrVal = repaymentValues[i] + repaymentResult * 12
		repaymentValues.push(arrVal)
	}

	repaymentValues.reverse()

	// makes an array of the values from the repaymentValues object
	let repaymentArrTemp = Object.values(repaymentValues)
	let repaymentArr = []

	// loops through array to make each value 2 decimal places
	for (let j = 0; j < repaymentArrTemp.length; j++) {
		repaymentArr.push(repaymentArrTemp[j].toFixed(2))
	}

	// decides which array to use for y axis of graph depending on which radio button is selected
	let yAxisValues =
		values.repaymentType === "Repayment" ? repaymentArr : interestArr

	// create array of years for x-axis of graph
	let years = [0]
	for (let i = 0; i < values.years; i++) {
		years.push(i + 1)
	}

	return (
		<Paper elevation={3} className="mortgageCalculator" sx={rootStyles}>
			<div id="mortgageCalc">
				<h2>Mortgage Calculator</h2>
				<div id="calculatorFields">
					<div id="calculatorFieldsTopRow">
						<MortgageTextField 
							label="Total Property Price"
							defaultValue={props.propertyPrice}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">£</InputAdornment>
								),
							}}
							onChange={handleChange("propertyPrice")}
						/>

						<MortgageTextField
							label="Deposit"
							defaultValue={props.propertyPrice * 0.1}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">£</InputAdornment>
								),
							}}
							onChange={handleChange("deposit")}
						/>
					</div>
						<MortgageTextField
							label="Mortgage Term"
							defaultValue="25"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">years</InputAdornment>
								),
							}}
							onChange={handleChange("years")}
						/>
						<MortgageTextField
							label="Interest Rate"
							defaultValue="3"
							InputProps={{
								endAdornment: <InputAdornment position="end">%</InputAdornment>,
							}}
							onChange={handleChange("interestRate")}
						/>
				</div>

				<div className="radioResultContainer">
					<RadioGroup
						aria-label="repaymentType"
						defaultValue="Repayment"
						onChange={handleChange("repaymentType")}
					>
						<FormControlLabel
							name="Repayment"
							value="Repayment"
							control={<Radio />}
							label="Repayment"
						/>
						<FormControlLabel
							name="Interest"
							value="Interest"
							control={<Radio />}
							label="Interest Only"
						/>
					</RadioGroup>
					<div className="resultContainer">
						<p className="mortgageLargeText">
							You would pay
							<span className={repayment + " mortgageAmount"}>
								£{repaymentResult}
							</span>
							<span className={interest + " mortgageAmount"}>
								£{interestResult}
							</span>{" "}
							/month
						</p>
						<p className="mortgageSmallText">
							over the course of {values.years} years
						</p>
					</div>
				</div>
			</div>
			<div className="mortgageChartContainer">
				<p className="chartAxes" id="chartYAxisLabel">Amount (£)</p>
				<Line
					className="mortgageChart"
					legend={{
						display: false,
					}}
					data={{
						label: "none",
						labels: Object.values(years),
						datasets: [
							{
								data: yAxisValues,
								backgroundColor: "rgba(73, 74, 243, 0.2)",
								borderColor: "rgba(73, 74, 243, 1)",
							},
						],
					}}
					options={{
						plugins: {
							legend: {
								display: false,
							},
						},
					}}
				/>
				<p className="chartAxes">Years</p>
			</div>
		</Paper>
	)
}

export default MortgageCalculator

