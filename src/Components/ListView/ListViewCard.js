import React from "react";
import Paper from '@material-ui/core/Paper';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
                        <KingBedIcon />
                        <p>{props.bedrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <BathtubIcon />
                        <p>{props.bathrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <WeekendIcon />
                        <p>{props.livingRooms}</p>
                    </div>
                </div>
                <p>{props.propertyDesc}</p>
                <Link to="/property-profile" className="btn" onClick={props.onClick} id={props.id} >
                    FIND OUT MORE <ArrowForwardIosIcon />
                </Link>
            </div>
        </Paper>

    )
}

export default ListViewCard;