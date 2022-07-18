import React from "react"
import { modalContent } from "./modal.content"

export function Modal(props) {
	const { handleCloseClick, modalClass } = props
	return (
		<div id="modalBackground" className={modalClass}>
			<div id="contactModal">
				<button id="closeModal" onClick={handleCloseClick}>
					{modalContent.cross}
				</button>
				{modalContent.line1}
				<br /> {modalContent.line2}
				<br /> {modalContent.line3}
				<img
					src={process.env.PUBLIC_URL + "/images/modal/modalImg.png"}
					alt="person making 'peace out' sign"
					id="modalImg"
				/>
			</div>
		</div>
	)
}
