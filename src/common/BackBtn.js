import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import React from "react"
import { useNavigate } from "react-router-dom"

// TODO - fix history.goback function
function Item() {
	let history = useNavigate()
	return (
		<button onClick={() => history(-1)} id="backBtn">
			<ArrowBackIcon /> <span>go back</span>
		</button>
	)
}

export default Item
