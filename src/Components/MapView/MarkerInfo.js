import React from "react";

function MarkerInfo(props) {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + "/images/properties/" + props.img} />
            <h4>{props.beds} bedroom {props.type}</h4>
        </div>
    )
}

export default MarkerInfo