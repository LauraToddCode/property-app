import React from "react";
import Paper from '@material-ui/core/Paper';
import Carousel from 'react-material-ui-carousel';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import MortgageCalculator from "./Components/MortgageCalculator";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { ListingsContext } from "./ListingsContext";

function PropertyProfile() {


    return (
        <ListingsContext.Consumer>
        {(context) => {
            const Id = context.state.clickedId
            return (
                <div className="appContainer">
                    <Paper className="profileContainer">
                        <div>
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
                                    <img src={process.env.PUBLIC_URL + "/images/properties/property-1-1.jpg"} className="carouselImg"/>
                                    <img src={process.env.PUBLIC_URL + "/images/properties/property-2-1.jpg"} className="carouselImg"/>
                                </Carousel>
                                <div className="profileMainDetails">
                                    <h2>Property Title</h2>
                                    <p>Address, Guildford</p>
                                    <Button 
                                        variant="contained" 
                                        size="large" 
                                        color="primary"
                                        startIcon={<CallIcon />}
                                    >
                                        Contact the Agent
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        size="large" 
                                        color="primary"
                                        startIcon={<StarBorderIcon />}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                            <div className="roomTypes">
                                <div className="indiRoomType">
                                    <KingBedIcon />
                                    <p>2 Bedrooms</p>
                                </div>
                                <div className="indiRoomType">
                                    <BathtubIcon />
                                    <p>3 Bathrooms</p>
                                </div>
                                <div className="indiRoomType">
                                    <WeekendIcon />
                                    <p>2 Living Rooms</p>
                                </div>
                            </div>
                            <h2>Features</h2>
                            <p>Coming Soon...</p>
                            <h2>Description</h2>
                            <p>Coming Soon...</p>
                            <p> Id is: {Id}</p>
                        </div>
                    </Paper>
                    <MortgageCalculator />
                </div>
            )
        }}
        </ListingsContext.Consumer>
    )
}

export default PropertyProfile