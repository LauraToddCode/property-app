import React from "react";
import Paper from "@material-ui/core/Paper";
import properties from "./properties.json";
import ListViewCard from "./ListView/ListViewCard";

function SavedProperties(props) {
    return (
        <div className="appContainer">
            <Paper elevation={3}>
                <h1>Ciao Bella</h1>
                <p>{props.savedItems}</p>
                {/*props.savedItems.forEach(propertyId => {
                    <ListViewCard 
                        id={properties[propertyId].id}
                        mainImg={process.env.PUBLIC_URL + "/images/properties/" + properties[propertyId].imgs[0]} 
                        imgAlt={properties[propertyId].imgAlt} 
                        displayPrice={properties[propertyId].displayPrice} 
                        type={properties[propertyId].type} 
                        propertyDesc={properties[propertyId].propertyDesc} 
                        bedrooms={properties[propertyId].bedrooms} 
                        bathrooms={properties[propertyId].bathrooms} 
                        livingRooms={properties[propertyId].livingRooms} 
                        key={properties[propertyId].id}
                        onClick={properties[propertyId].getId}
                    />
                })*/}
            </Paper>
        </div>
    )
}


export default SavedProperties