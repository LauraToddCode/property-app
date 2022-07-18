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
	TextField,
	useTheme,
} from "@mui/material"

import { Line } from "react-chartjs-2"
import React from "react"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

function MortgageCalculator(props) {
	const theme = useTheme()

	const rootStyles = {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
	}

	const marginStyles = { marginTop: theme.spacing(1) }

	const textFieldStyles = { width: "25ch" }

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
	let totalMonths = 12 * Number(values.years)
	let interestPerMonth = Number(values.interestRate / 100) / 12
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
				<div>
					<div style={rootStyles}>
						<TextField
							label="Total Property Price"
							defaultValue={props.propertyPrice}
							variant="outlined"
							sx={(marginStyles, textFieldStyles)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">£</InputAdornment>
								),
							}}
							onChange={handleChange("propertyPrice")}
							onClick={(e) =>
								e.target.setSelectionRange(0, e.target.value.length)
							}
						/>
						<TextField
							label="Deposit"
							defaultValue={props.propertyPrice * 0.1}
							variant="outlined"
							sx={(marginStyles, textFieldStyles)}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">£</InputAdornment>
								),
							}}
							onChange={handleChange("deposit")}
							onClick={(e) =>
								e.target.setSelectionRange(0, e.target.value.length)
							}
						/>
					</div>
					<div>
						<TextField
							label="Mortgage Term"
							defaultValue="25"
							variant="outlined"
							sx={(marginStyles, textFieldStyles)}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">years</InputAdornment>
								),
							}}
							onChange={handleChange("years")}
							onClick={(e) =>
								e.target.setSelectionRange(0, e.target.value.length)
							}
						/>
						<TextField
							label="Interest Rate"
							defaultValue="3"
							variant="outlined"
							sx={(marginStyles, textFieldStyles)}
							InputProps={{
								endAdornment: <InputAdornment position="end">%</InputAdornment>,
							}}
							onChange={handleChange("interestRate")}
							onClick={(e) =>
								e.target.setSelectionRange(0, e.target.value.length)
							}
						/>
					</div>
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
			</div>
		</Paper>
	)
}

export default MortgageCalculator
