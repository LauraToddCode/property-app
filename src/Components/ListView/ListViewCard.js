import React from "react";
import Paper from '@material-ui/core/Paper';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { connect } from "react-redux";
import { addToSaved, loadCurrentItem } from "../../redux/save/save-actions";

function ListViewCard({ productData, addToSaved, loadCurrentItem }) {

    return (
        <Paper elevation={3} className="listViewCardCont">
            <div elevation={3} className="listViewImgCont">
                <img src={process.env.PUBLIC_URL + "/images/properties/" + productData.imgs[0]} alt={productData.imgAlt} className="listViewPropertyImg"/>
                <p className="listViewPrice">{productData.displayPrice}</p>
            </div>
            <div elevation={3} className="listViewInfoCont">
                <h3>{productData.bedrooms} bed {productData.type} for sale</h3>
                <div className="roomTypes">
                    <div className="indiRoomType">
                        <KingBedIcon />
                        <p>{productData.bedrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <BathtubIcon />
                        <p>{productData.bathrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <WeekendIcon />
                        <p>{productData.livingRooms}</p>
                    </div>
                </div>
                <p>{productData.propertyDesc}</p>
                <Link to={`/property-profile/${productData.id}`} className="btn">
                    <button onClick={() => loadCurrentItem(productData)}>
                    FIND OUT MORE <ArrowForwardIosIcon />
                    </button>
                </Link>
                <button onClick={() => addToSaved(productData.id)}>Save</button>
            </div>
        </Paper>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToSaved: (id) => dispatch(addToSaved(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(ListViewCard);