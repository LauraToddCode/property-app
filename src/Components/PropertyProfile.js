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
import { ListingsContext } from "../ListingsContext";
import propertiesData from "./properties.json";

function PropertyProfile(props) {
    
    return (
        <ListingsContext.Consumer>
        {(context) => {
            const Id = context.state.clickedId
            const currProperty = propertiesData.filter(obj => {
                return obj.id === Id
            })
            return (
                <div className="appContainer">
                    <Paper className="profileContainer">
                            <div className="profileTop">
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
                                    {currProperty[0].imgs.map(imgSrc => 
                                        <img 
                                            src={process.env.PUBLIC_URL + "/images/properties/" + imgSrc}
                                            className="carouselImg"
                                            alt={currProperty[0].imgAlt} 
                                        />
                                    )}
                                </Carousel>
                                <div className="profileMainDetails">
                                    <h2>{currProperty[0].bedrooms} bedroom {currProperty[0].type}</h2>
                                    <p>{currProperty[0].address}</p>
                                    <Link to="/property-profile" className="btn" >
                                        <CallIcon />CONTACT THE AGENT 
                                    </Link>
                                    <Link to="/property-profile" className="btn saveBtn" onClick={props.onClick} id={Id}>
                                        <StarBorderIcon />SAVE
                                    </Link>
                                </div>
                            </div>
                            <div className="roomTypes">
                                <div className="indiRoomType">
                                    <KingBedIcon />
                                    <p>{currProperty[0].bedrooms} Bedrooms</p>
                                </div>
                                <div className="indiRoomType">
                                    <BathtubIcon />
                                    <p>{currProperty[0].bathrooms} Bathrooms</p>
                                </div>
                                <div className="indiRoomType">
                                    <WeekendIcon />
                                    <p>{currProperty[0].livingRooms} Living Rooms</p>
                                </div>
                            </div>
                            <h2>Features</h2>
                            <ul>{currProperty[0].features.map(feature => <li>{feature}</li>)}</ul>
                            <h2>Description</h2>
                            <p>{currProperty[0].propertyDesc}</p>
                    </Paper>
                    <MortgageCalculator propertyPrice={currProperty[0].price}/>
                </div>
            )
        }}
        </ListingsContext.Consumer>
    )
}

export default PropertyProfile