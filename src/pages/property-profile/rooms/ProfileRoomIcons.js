import React from "react"

export function ProfileRoomIcons(props) {
	const { icon, quantity, label, labelPlural } = props
	return (
		<div className="indiRoomType">
			{icon}
			{quantity}
			<p>
				{label}
				{labelPlural}
			</p>
		</div>
	)
}
