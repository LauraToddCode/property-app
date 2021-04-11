import React, { useState } from "react";
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import { connect } from "react-redux";
import { removeFromSaved, loadCurrentItem } from "../redux/save/save-actions";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";


function SavedItem({ itemData, removeFromSaved, loadCurrentItem }) {

    return (
        <div className="listViewCardCont">
            <img 
                src={process.env.PUBLIC_URL + "/images/properties/" + itemData.imgs[0]} 
                alt={itemData.imgAlt} 
                className="listViewPropertyImg"
            />
            <div className="listViewInfoCont savedInfoCont">
                <p className="listViewPrice">{itemData.displayPrice}</p>
                <p className="listViewTagline">{itemData.bedrooms} bed {itemData.type} for sale</p>
                <div className="roomTypes">
                    <div className="indiRoomType">
                        <KingBedIcon />
                        <p>{itemData.bedrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <BathtubIcon />
                        <p>{itemData.bathrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <WeekendIcon />
                        <p>{itemData.livingRooms}</p>
                    </div>
                </div>
                <p className="listViewDesc">{itemData.propertyDesc}</p>
                <div className="savedBtnsContainer">
                    <Link to={`/property-profile/${itemData.id}`} className="savedMoreBtn btn" onClick={() => loadCurrentItem(itemData)}>
                        find out more
                    </Link>
                    <button className="btn deleteBtn" onClick={() => removeFromSaved(itemData.id)}>
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromSaved: (id) => dispatch(removeFromSaved(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(SavedItem);