import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
        },
    },
}));

function ListViewCard(props) {
    const classes = useStyles();

    return (
        <div className="listViewCardCont">
            <Paper elevation={3} className="listViewImgCont">
                <img src={props.mainImg} alt={props.imgAlt} className="listViewPropertyImg"/>
                <p className="listViewPrice">{props.displayPrice}</p>
            </Paper>
            <Paper elevation={3} className="listViewInfoCont">
                <h3>{props.bedrooms} bed {props.type} for sale</h3>
                <div className="roomTypes">
                    <div className="indiRoomType">
                        <img src={process.env.PUBLIC_URL + "/images/propertyCards/bedroom.png"} />
                        <p>{props.bedrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <img src={process.env.PUBLIC_URL + "/images/propertyCards/bathroom.png"} />
                        <p>{props.bathrooms}</p>
                    </div>
                    <div className="indiRoomType">
                        <img src={process.env.PUBLIC_URL + "/images/propertyCards/livingRoom.png"} />
                        <p>{props.livingRooms}</p>
                    </div>
                </div>
                <p>{props.propertyDesc}</p>
                <a className="findOutMore">Find out more</a>
            </Paper>
        </div>
    )
}

export default ListViewCard;