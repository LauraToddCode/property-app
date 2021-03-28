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
import { connect } from "react-redux";
import { addToSaved } from "../redux/save/save-actions";


function PropertyProfile({ currentItem, addToSaved }) {
    return (
        <div className="appContainer">
            <Paper className="profileContainer">
                    <div className="profileTop">
                        <Carousel>
                            <img/>
                        </Carousel>
                        <div className="profileMainDetails">
                            <h2>{currentItem.bedrooms} bedroom {currentItem.propertyDesc}</h2>
                            <p></p>
                            <Link to="/property-profile" className="btn" >
                                <CallIcon />CONTACT THE AGENT 
                            </Link>
                            <Link to="/property-profile" className="btn saveBtn">
                                <button onClick={() => addToSaved(currentItem.id)}>x
                                <StarBorderIcon />SAVE
                                </button>
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

const mapStateToProps = state => {
    return {
        currentItem: state.save.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToSaved: (id) => dispatch(addToSaved(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyProfile)