import React from "react";
import SavedItem from "./SavedItem";
import { connect } from "react-redux";

function Saved({ savedProperties }) {
    return (
        <div>
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