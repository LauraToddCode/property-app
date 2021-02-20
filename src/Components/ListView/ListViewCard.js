import React from "react";

function ListViewCard(props) {
    return (
        <div className="listViewCardCont">
            <div className="listViewImgCont">
                <img src={props.mainImg} alt={props.imgAlt} className="listViewPropertyImg"/>
                <p className="listViewPrice">{props.displayPrice}</p>
            </div>
            <div className="listViewInfoCont">
                <h3>{props.bedrooms} bed {props.type} for sale</h3>
                <div className="roomTypes">
                    <div className="indiRoomType">
                        <img src={process.env.PUBLIC_URL + "/images/propertyCards/bedroom.png"} />
                        <p>{props.bedrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <img src={process.env.PUBLIC_URL + "/images/propertyCards/bathroom.png"} />
                        <p>{props.bathrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <img src={process.env.PUBLIC_URL + "/images/propertyCards/livingRoom.png"} />
                        <p>{props.livingRooms}</p>
                    </div>
                </div>
                <p>{props.propertyDesc}</p>
                <a className="findOutMore">Find out more</a>
            </div>
        </div>
    )
}

export default ListViewCard;