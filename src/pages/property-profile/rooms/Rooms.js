import BathtubIcon from "@mui/icons-material/Bathtub"
import KingBedIcon from "@mui/icons-material/KingBed"
import { ProfileRoomIcons } from "./ProfileRoomIcons"
import React from "react"
import WeekendIcon from "@mui/icons-material/Weekend"

export function Rooms(props) {
	const { plurals, viewportSize, currentItem } = props
	const { bedsPlural, bathsPlural, livingPlural } = plurals
	return (
		<div className={`roomTypes ${viewportSize}`}>
			<ProfileRoomIcons
				icon={<KingBedIcon className="roomTypeIcon" />}
				quantity={currentItem.bedrooms}
				label="Bedroom"
				labelPlural={bedsPlural}
			/>
			<ProfileRoomIcons
				icon={<BathtubIcon className="roomTypeIcon" />}
				quantity={currentItem.bathrooms}
				label="Bathroom"
				labelPlural={bathsPlural}
			/>
			<ProfileRoomIcons
				icon={<WeekendIcon className="roomTypeIcon" />}
				quantity={currentItem.livingRooms}
				label="Living Room"
				labelPlural={livingPlural}
			/>
		</div>
	)
}
