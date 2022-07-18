import React, { useEffect, useState } from "react"

import { BackBtn } from "../../common/BackBtn"
import { Modal } from "./Modal"
import MortgageCalculator from "../../common/MortgageCalculator"
import { PropertyImg } from "./PropertyImg"
import { Rooms } from "./rooms"
import { addToSaved } from "../../redux/save/save-actions"
import { connect } from "react-redux"
import { pluralCheck } from "./pluralCheck"

function PropertyProfile({ currentItem, addToSaved }) {
	useEffect(() => {
		window.scrollTo(0, 0)
	})

	const [modalDisplay, setModalDisplay] = useState(false)

	const handleContactClick = () => {
		setModalDisplay(true)
	}

	const handleCloseClick = () => {
		setModalDisplay(false)
	}

	const modalClass = modalDisplay ? "show" : "hide"

	// checks to see if has more than one of the room types and makes them plural
	const bedsPlural = pluralCheck(currentItem.bedrooms)
	const bathsPlural = pluralCheck(currentItem.bathrooms)
	const livingPlural = pluralCheck(currentItem.livingRooms)

	const plurals = { bedsPlural, bathsPlural, livingPlural }

	return (
		<div className="profileContainer">
			<div className="profilePanel">
				<BackBtn />
				<div className="profileTop">
					<PropertyImg currentItem={currentItem} />
					<div className="profileMainDetails">
						<p id="profilePrice">{currentItem.displayPrice}</p>
						<p id="profileTagline">
							{currentItem.bedrooms} bedroom {currentItem.type}
						</p>
						<Rooms
							plurals={plurals}
							viewportSize="desktopRooms"
							currentItem={currentItem}
						/>
						<div id="profileBtnsCont">
							<button className="contactBtn btn" onClick={handleContactClick}>
								contact the agent
							</button>
							<button
								className="profileSaveBtn saveBtn btn"
								onClick={() => addToSaved(currentItem.id)}
							>
								save
							</button>
						</div>
					</div>
				</div>
				<Rooms
					plurals={plurals}
					viewportSize="mobileRooms"
					currentItem={currentItem}
				/>
				<div className="profileFeaturesDesc">
					<div className="featuresDesc">
						<h2>Features</h2>
						<ul className="featureList">
							{currentItem.features.map((feature, key) => (
								<li key={key}>{feature}</li>
							))}
						</ul>
					</div>
					<div className="featuresDesc">
						<h2>Description</h2>
						<p>{currentItem.propertyDesc}</p>
					</div>
				</div>
			</div>
			<MortgageCalculator propertyPrice={currentItem.price} />
			<Modal handleCloseClick={handleCloseClick} modalClass={modalClass} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		currentItem: state.save.currentItem,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToSaved: (id) => dispatch(addToSaved(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyProfile)
