import React from "react";
import ReactDOMServer from 'react-dom/server';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import { Link } from "react-router-dom";

function renderMarkerContent(id, findOutMore) {
    return ReactDOMServer.renderToString(
        <Link to={`/property-profile/${id}`} className="moreBtn btn" onClick={findOutMore}>
            find out more
        </Link>
    )
}

function MarkerInfo(props) {
    return (
        <div className="infoWindow">
            <div>
                <img src={process.env.PUBLIC_URL + "/images/properties/" + props.img} className="windowInfoImg"/>
                <p>{props.price}</p>
                <p>{props.beds} bedroom {props.type}</p>
            </div>
            <div>
                <div className="roomTypes">
                    <div className="indiRoomType">
                        <KingBedIcon />
                        <p>{props.beds}</p>
                    </div>
                    <div className="indiRoomType">
                        <BathtubIcon />
                        <p>{props.baths}</p>
                    </div>
                    <div className="indiRoomType">
                        <WeekendIcon />
                        <p>{props.living}</p>
                    </div>
                </div>
                <div className="btnsContainer">
                    {renderMarkerContent(props.id, props.findOutMore)}
                    <button className="saveBtn profileSaveBtn btn" onClick={props.saveItem}>save</button>
                </div>
            </div>
        </div>
    )
}

export default MarkerInfo