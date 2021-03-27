import React from "react";
import Paper from '@material-ui/core/Paper';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { connect } from "react-redux";

function SavedCard({ itemData }) {

    return (
        <Paper elevation={3} className="listViewCardCont">
            <div elevation={3} className="listViewImgCont">
                <img src={itemData.mainImg} alt={itemData.imgAlt} className="listViewPropertyImg"/>
                <p className="listViewPrice">{itemData.displayPrice}</p>
            </div>
            <div elevation={3} className="listViewInfoCont">
                <h3>{itemData.bedrooms} bed {itemData.type} for sale</h3>
                <div className="roomTypes">
                    <div className="indiRoomType">
                        <KingBedIcon />
                        <p>{itemData.bedrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <BathtubIcon />
                        <p>{itemData.bathrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <WeekendIcon />
                        <p>{itemData.livingRooms}</p>
                    </div>
                </div>
                <p>{itemData.propertyDesc}</p>
                <Link to="/property-profile" className="btn" onClick={itemData.onClick} id={itemData.id} >
                    FIND OUT MORE <ArrowForwardIosIcon />
                </Link>
            </div>
        </Paper>

    )
}


export default SavedCard;