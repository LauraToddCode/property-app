import React from "react";
import Paper from '@material-ui/core/Paper';
import Carousel from 'react-material-ui-carousel';
import { Link } from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import MortgageCalculator from "./MortgageCalculator";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import propertiesData from "./properties.json";

function PropertyProfile(props) {
    return (
        <div className="appContainer">
            <Paper className="profileContainer">
                    <div className="profileTop">
                        <Carousel>
                            <img/>
                        </Carousel>
                        <div className="profileMainDetails">
                            <h2> bedroom </h2>
                            <p></p>
                            <Link to="/property-profile" className="btn" >
                                <CallIcon />CONTACT THE AGENT 
                            </Link>
                            <Link to="/property-profile" className="btn saveBtn">
                                <StarBorderIcon />SAVE
                            </Link>
                        </div>
                    </div>
                    <div className="roomTypes">
                        <div className="indiRoomType">
                            <KingBedIcon />
                            <p>Bedrooms</p>
                        </div>
                        <div className="indiRoomType">
                            <BathtubIcon />
                            <p>Bathrooms</p>
                        </div>
                        <div className="indiRoomType">
                            <WeekendIcon />
                            <p>Living Rooms</p>
                        </div>
                    </div>
                    <h2>Features</h2>
                    <ul></ul>
                    <h2>Description</h2>
                    <p></p>
            </Paper>
            <MortgageCalculator/>
        </div>
    )
}

export default PropertyProfile