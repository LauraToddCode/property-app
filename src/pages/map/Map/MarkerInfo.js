import BathtubIcon from "@mui/icons-material/Bathtub"
import KingBedIcon from "@mui/icons-material/KingBed"
import React from "react"
import { RoomsIcon } from "../../../common/RoomsIcon"
import WeekendIcon from "@mui/icons-material/Weekend"

export function MarkerInfo(props) {
	function redirectToProfilePage(event) {
		event.preventDefault()
		props.findOutMore(event.currentTarget.getAttribute("href"))
	}

	return (
		<div className="infoWindow">
			<div className="infoCol1">
				<img
					src={process.env.PUBLIC_URL + "/images/properties/" + props.img}
					className="windowInfoImg"
					alt="property"
				/>
				<p className="infoWindowPrice">{props.price}</p>
				<p className="infoTagLine">
					{props.beds} bedroom {props.type}
				</p>
			</div>
			<div className="infoCol2">
				<div className="infoRoomTypes">
					<RoomsIcon
						className="infoRoomType"
						icon={<KingBedIcon />}
						quantity={props.beds}
					/>
					<RoomsIcon
						className="infoRoomType"
						icon={<BathtubIcon />}
						quantity={props.baths}
					/>
					<RoomsIcon
						className="infoRoomType"
						icon={<WeekendIcon />}
						quantity={props.living}
					/>
				</div>
				<div className="infoWindowBtnsContainer">
					<a
						href={`/property-profile/${props.id}`}
						className="moreBtn infoWindowBtns"
						onClick={redirectToProfilePage}
					>
						find out more
					</a>
					<button className="saveBtn infoWindowBtns" onClick={props.saveItem}>
						save
					</button>
				</div>
			</div>
		</div>
	)
}
