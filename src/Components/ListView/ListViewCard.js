import React from "react";

function ListViewCard(props) {
    return (
        <div class="listViewCardCont">
            <div class="listViewImgCont">
                <img src={props.mainImg} alt={props.imgAlt} class="listViewPropertyImg"/>
                <p class="listViewPrice">{props.price}</p>
            </div>
            <div class="listViewInfoCont">
                <h3>{props.cardTitle}</h3>
                <p>{props.propertyDesc}</p>
            </div>
        </div>
    )
}

export default ListViewCard;