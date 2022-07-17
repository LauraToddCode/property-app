import React, { useState } from "react"
import { loadCurrentItem, removeFromSaved } from "../redux/save/save-actions"

import BathtubIcon from "@mui/icons-material/Bathtub"
import DeleteIcon from "@mui/icons-material/Delete"
import KingBedIcon from "@mui/icons-material/KingBed"
import { Link } from "react-router-dom"
import WeekendIcon from "@mui/icons-material/Weekend"
import { connect } from "react-redux"

function SavedItem({ itemData, removeFromSaved, loadCurrentItem }) {
	return (
		<div className="listViewCardCont">
			<img
				src={process.env.PUBLIC_URL + "/images/properties/" + itemData.imgs[0]}
				alt={itemData.imgAlt}
				className="listViewPropertyImg"
			/>
			<div className="listViewInfoCont savedInfoCont">
				<p className="listViewPrice">{itemData.displayPrice}</p>
				<p className="listViewTagline">
					{itemData.bedrooms} bed {itemData.type} for sale
				</p>
				<div className="roomTypes">
					<div className="indiRoomType">
						<KingBedIcon />
						<p>{itemData.bedrooms}</p>
					</div>
					<div className="indiRoomType">
						<BathtubIcon />
						<p>{itemData.bathrooms}</p>
					</div>
					<div className="indiRoomType">
						<WeekendIcon />
						<p>{itemData.livingRooms}</p>
					</div>
				</div>
				<p className="listViewDesc">{itemData.propertyDesc}</p>
				<div className="savedBtnsContainer">
					<Link
						to={`/property-profile/${itemData.id}`}
						className="savedMoreBtn btn"
						onClick={() => loadCurrentItem(itemData)}
					>
						find out more
					</Link>
					<button
						className="btn deleteBtn"
						onClick={() => removeFromSaved(itemData.id)}
					>
						<DeleteIcon />
					</button>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromSaved: (id) => dispatch(removeFromSaved(id)),
		loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
	}
}

export default connect(null, mapDispatchToProps)(SavedItem)
