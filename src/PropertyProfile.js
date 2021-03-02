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
import propertiesData from "./properties.json";

function PropertyProfile() {


    return (
        <ListingsContext.Consumer>
        {(context) => {
            const Id = context.state.clickedId
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
                                    {propertiesData[Id].imgs.map(imgSrc => 
                                        <img 
                                            src={process.env.PUBLIC_URL + "/images/properties/" + imgSrc}
                                            className="carouselImg"
                                            alt={propertiesData[Id].imgAlt} 
                                        />
                                    )}
                                </Carousel>
                                <div className="profileMainDetails">
                                    <h2>{propertiesData[Id].bedrooms} bedroom {propertiesData[Id].type}</h2>
                                    <p>{propertiesData[Id].address}</p>
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
                                    <p>{propertiesData[Id].bedrooms} Bedrooms</p>
                                </div>
                                <div className="indiRoomType">
                                    <BathtubIcon />
                                    <p>{propertiesData[Id].bathrooms} Bathrooms</p>
                                </div>
                                <div className="indiRoomType">
                                    <WeekendIcon />
                                    <p>{propertiesData[Id].livingRooms} Living Rooms</p>
                                </div>
                            </div>
                            <h2>Features</h2>
                            <ul>{propertiesData[Id].features.map(feature => <li>{feature}</li>)}</ul>
                            <h2>Description</h2>
                            <p>{propertiesData[Id].propertyDesc}</p>
                    </Paper>
                    <MortgageCalculator propertyPrice={propertiesData[Id].price}/>
                </div>
            )
        }}
        </ListingsContext.Consumer>
    )
}

export default PropertyProfile