import React from "react";
import Paper from "@material-ui/core/Paper";
import properties from "./properties.json";
import SavedCard from "./SavedCard";
import { connect } from "react-redux";

function SavedProperties({ savedItems }) {
   
    return (
        <div className="appContainer">
            {savedItems.map(item => {
                <SavedCard key={item.id} itemData={item}/>
            })}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        savedItems: state.save.savedItems
    }
}

export default connect(mapStateToProps)(SavedProperties);