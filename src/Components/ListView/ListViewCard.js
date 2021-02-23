import React from "react";
import Paper from '@material-ui/core/Paper';

function ListViewCard(props) {

    return (
        <Paper elevation={3} className="listViewCardCont">

                <div elevation={3} className="listViewImgCont">
                    <img src={props.mainImg} alt={props.imgAlt} className="listViewPropertyImg"/>
                    <p className="listViewPrice">{props.displayPrice}</p>
                </div>
                <div elevation={3} className="listViewInfoCont">
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
            </Paper>

    )
}

export default ListViewCard;