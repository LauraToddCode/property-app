import React from "react";
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';

function MarkerInfo(props) {

    function redirectToProfilePage(event) {
		event.preventDefault();
		props.findOutMore(event.currentTarget.getAttribute('href'));
	}

    return (
        <div className="infoWindow">
            <div className="infoCol1">
                <img src={process.env.PUBLIC_URL + "/images/properties/" + props.img} className="windowInfoImg"/>
                <p className="infoWindowPrice">{props.price}</p>
                <p className="infoTagLine">{props.beds} bedroom {props.type}</p>
            </div>
            <div className="infoCol2">
                <div className="infoRoomTypes">
                    <div className="infoRoomType">
                        <KingBedIcon />
                        <p>{props.beds}</p>
                    </div>
                    <div className="infoRoomType">
                        <BathtubIcon />
                        <p>{props.baths}</p>
                    </div>
                    <div className="infoRoomType">
                        <WeekendIcon />
                        <p>{props.living}</p>
                    </div>
                </div>
                <div className="infoWindowBtnsContainer">
                    <a href={`/property-profile/${props.id}`} className="moreBtn infoWindowBtns" onClick={redirectToProfilePage}>
                        find out more
                    </a>

                    <button className="saveBtn infoWindowBtns" onClick={props.saveItem}>save</button>
                </div>
            </div>
        </div>
    )
}

export default MarkerInfo