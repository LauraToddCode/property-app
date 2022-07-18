import Carousel from "react-material-ui-carousel"
import React from "react"

export function PropertyImg(props) {
	const { currentItem } = props
	return currentItem.imgs.length > 1 ? (
		<Carousel
			className="carousel"
			autoPlay={false}
			navButtonsProps={{
				style: {
					padding: "10px",
				},
			}}
			navButtonsAlwaysVisible="false"
		>
			{currentItem.imgs.map((image, key) => (
				<img
					key={key}
					src={process.env.PUBLIC_URL + "/images/properties/" + image}
					alt={currentItem.imgAlt}
					className="carouselImg"
				/>
			))}
		</Carousel>
	) : (
		<img
			src={process.env.PUBLIC_URL + "/images/properties/" + currentItem.imgs[0]}
			alt={currentItem.imgAlt}
			className="propertyProfileImg"
		/>
	)
}
