import React from "react"

export function Modal(props) {
	const { handleCloseClick, modalClass } = props
	return (
		<div id="modalBackground" className={modalClass}>
			<div id="contactModal">
				<button id="closeModal" onClick={handleCloseClick}>
					X
				</button>
				If Homelee were a real company we'd provide details of the agent here.
				<br /> Unfortunately it's not.
				<br /> So we can't.
				<img
					src={process.env.PUBLIC_URL + "/images/modal/modalImg.png"}
					alt="not found"
					id="modalImg"
				/>
			</div>
		</div>
	)
}
