import React from "react";
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { connect } from "react-redux";
import { addToSaved, loadCurrentItem } from "../../redux/save/save-actions";

function ListViewCard({ productData, addToSaved, loadCurrentItem }) {

    return (
        <div className="listViewCardCont">
            <img src={process.env.PUBLIC_URL + "/images/properties/" + productData.imgs[0]} alt={productData.imgAlt} className="listViewPropertyImg"/>
            <div className="listViewInfoCont">
                <p className="listViewPrice">{productData.displayPrice}</p>
                <p className="listViewTagline">{productData.bedrooms} bed {productData.type} for sale</p>
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
                <p className="listViewDesc">{productData.propertyDesc}</p>

                <div className="btnsContainer">
                    <Link to={`/property-profile/${productData.id}`} className="moreBtn btn" onClick={() => loadCurrentItem(productData)}>
                        find out more
                    </Link>
                    <button className="saveBtn btn" onClick={() => addToSaved(productData.id)}>save</button>
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