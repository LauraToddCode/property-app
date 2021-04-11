import React from "react";
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToSaved, loadCurrentItem } from "../../redux/save/save-actions";

function ListViewCard({ propertyData, addToSaved, loadCurrentItem }) {

    return (
        <div className="listViewCardCont">
            <img 
                src={process.env.PUBLIC_URL + "/images/properties/" + propertyData.imgs[0]} 
                alt={propertyData.imgAlt} 
                className="listViewPropertyImg"
            />
            <div className="listViewInfoCont">
                <p className="listViewPrice">{propertyData.displayPrice}</p>
                <p className="listViewTagline">{propertyData.bedrooms} bed {propertyData.type} for sale</p>
                <div className="roomTypes">
                    <div className="indiRoomType">
                        <KingBedIcon />
                        <p>{propertyData.bedrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <BathtubIcon />
                        <p>{propertyData.bathrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <WeekendIcon />
                        <p>{propertyData.livingRooms}</p>
                    </div>
                </div>
                <p className="listViewDesc">{propertyData.propertyDesc}</p>

                <div className="btnsContainer">
                    <Link to={`/property-profile/${propertyData.id}`} className="moreBtn btn" onClick={() => loadCurrentItem(propertyData)}>
                        find out more
                    </Link>
                    <button className="saveBtn btn" onClick={() => addToSaved(propertyData.id)}>save</button>
                </div>
            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToSaved: (id) => dispatch(addToSaved(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(ListViewCard);