import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";

const SavedItem = lazy(() => import("./SavedItem"));
const BackBtn = lazy(() => import("./BackBtn"));

function Saved({ savedProperties }) {
    const noItems = savedProperties.length == 0 ? "show" : "hide";

    return (
        <div id="savedContainer">
            <Suspense fallback={<div></div>}>
                <BackBtn />
                <p className={"savedMessage " + noItems}>You have no saved properties</p>
                {savedProperties.map(item =>
                    <SavedItem key={item.id} itemData={item}/>
                )}
            </Suspense>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        savedProperties: state.save.savedItems
    }
}

export default connect(mapStateToProps)(Saved);