import React, { Suspense, lazy } from "react"

import { connect } from "react-redux"

import { BackBtn } from "../../common/BackBtn"
import { Spinner } from "../../common/Spinner"

const SavedItem = lazy(() => import("./SavedItem"))

function Saved({ savedProperties }) {
	const noItems = savedProperties.length === 0 ? "show" : "hide"
console.log(savedProperties)
	return (
		<div id="savedContainer">
			<Suspense fallback={<Spinner />}>
				<BackBtn />
				<p className={"savedMessage " + noItems}>
					You have no saved properties
				</p>
				{savedProperties.map((item) => (
					<SavedItem key={item.id} itemData={item} />
				))}
			</Suspense>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		savedProperties: state.save.savedItems,
	}
}

export default connect(mapStateToProps)(Saved)

