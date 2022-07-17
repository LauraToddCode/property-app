import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import React from "react"
import { useNavigate } from "react-router-dom"

function Item() {
	let history = useNavigate()
	return (
		<button onClick={() => history.goBack()} id="backBtn">
			<ArrowBackIcon /> <span>go back</span>
		</button>
	)
}

export default Item
