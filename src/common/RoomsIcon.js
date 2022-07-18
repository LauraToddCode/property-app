import React from "react"

export function RoomsIcon(props) {
	const { className, icon, quantity } = props
	return (
		<div className={className}>
			{icon}
			<p>{quantity}</p>
		</div>
	)
}
