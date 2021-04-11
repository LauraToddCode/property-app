import React from "react";
import SavedItem from "./SavedItem";
import BackBtn from "./BackBtn";
import { connect } from "react-redux";

function Saved({ savedProperties }) {
    const noItems = savedProperties.length == 0 ? "show" : "hide";

    return (
        <div id="savedContainer">
            <BackBtn />
            <p className={"savedMessage " + noItems}>You have no saved properties</p>
            {savedProperties.map(item =>
                <SavedItem key={item.id} itemData={item}/>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        savedProperties: state.save.savedItems
    }
}

export default connect(mapStateToProps)(Saved);