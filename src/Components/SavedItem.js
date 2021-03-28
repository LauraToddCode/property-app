import React from "react";
import { connect } from "react-redux";
import { removeFromSaved } from "../redux/save/save-actions";

function SavedItem({ itemData, removeFromSaved }) {
    return (
        <div>
            <p>{itemData.propertyDesc}</p>
            <button onClick={() => removeFromSaved(itemData.id)}>Remove</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromSaved: (id) => dispatch(removeFromSaved(id))
    }
}

export default connect(null, mapDispatchToProps)(SavedItem);