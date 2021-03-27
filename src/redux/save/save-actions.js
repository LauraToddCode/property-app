import * as actionTypes from "./save-types";

export const addToSaved = (itemID) => {
    return {
        type: actionTypes.ADD_TO_SAVED,
        payload: {
            id: itemID
        }
    }
}

export const removeFromSaved = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_SAVED,
        payload: {
            id: itemID
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}