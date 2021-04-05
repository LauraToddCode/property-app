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
        <div className="profileContainer">
            <div className="profilePanel">
                    <div className="profileTop">
                        {/* check if there's more than one image for the property and if there is, maps them in a carousel. Else, it just shows the one image */}
                        {currentItem.imgs.length > 1 ? 
                        <Carousel 
                            className="carousel"
                            autoPlay={false}
                            navButtonsProps={{
                                style: {
                                    padding: "10px",
                                },
                            }}
                            navButtonsAlwaysVisible="false"
                        >
                            {currentItem.imgs.map(image =>
                                <img src={process.env.PUBLIC_URL + "/images/properties/" + image} alt={currentItem.imgAlt} className="carouselImg"/>
                            )}
                        </Carousel> :
                            <img src={process.env.PUBLIC_URL + "/images/properties/" + currentItem.imgs[0]} alt={currentItem.imgAlt} className="propertyProfileImg"/>
                        }
                        <div className="profileMainDetails">
                            <p id="profilePrice">{currentItem.displayPrice}</p>
                            <p id="profileTagline">{currentItem.bedrooms} bedroom {currentItem.type}</p>
                            <div className="roomTypes desktopRooms">
                                <div className="indiRoomType">
                                    <KingBedIcon className="roomTypeIcon"/>
                                    {currentItem.bedrooms}
                                    <p>Bedrooms</p>
                                </div>
                                <div className="indiRoomType">
                                    <BathtubIcon className="roomTypeIcon" />
                                    {currentItem.bathrooms}
                                    <p>Bathrooms</p>
                                </div>
                                <div className="indiRoomType">
                                    <WeekendIcon className="roomTypeIcon" />
                                    {currentItem.livingRooms}
                                    <p>Living Rooms</p>
                                </div>
                            </div>
                            <div id="profileBtnsCont">
                                <Link to="/property-profile" className="contactBtn btn" >
                                    contact the agent 
                                </Link>
                                <button className="profileSaveBtn saveBtn btn" onClick={() => addToSaved(currentItem.id)}>save</button>
                            </div>
                        </div>
                    </div>
                    <div className="roomTypes mobileRooms">
                        <div className="indiRoomType">
                            <KingBedIcon className="roomTypeIcon" />
                            {currentItem.bedrooms}
                            <p>Bedrooms</p>
                        </div>
                        <div className="indiRoomType">
                            <BathtubIcon className="roomTypeIcon" />
                            {currentItem.bathrooms}
                            <p>Bathrooms</p>
                        </div>
                        <div className="indiRoomType">
                            <WeekendIcon className="roomTypeIcon" />
                            {currentItem.livingRooms}
                            <p>Living Rooms</p>
                        </div>
                    </div>
                    <div className="profileFeaturesDesc">
                        <div className="featuresDesc">
                            <h2>Features</h2>
                            <ul className="featureList">
                                {currentItem.features.map(feature =>
                                <li>{feature}</li>
                                )}
                            </ul>
                        </div>
                        <div className="featuresDesc">
                            <h2>Description</h2>
                            <p>{currentItem.propertyDesc}</p>
                        </div>
                    </div>
            </div>
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