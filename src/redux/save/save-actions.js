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

export const getMinPriceValue = (value) => {
    return {
        type: actionTypes.GET_MINPRICE_VALUE,
        payload: value
    }
}

export const getMaxPriceValue = (value) => {
    return {
        type: actionTypes.GET_MAXPRICE_VALUE,
        payload: value
    }
}

export const getMinBedsValue = (value) => {
    return {
        type: actionTypes.GET_MINBEDS_VALUE,
        payload: value
    }
}

export const getMaxBedsValue = (value) => {
    return {
        type: actionTypes.GET_MAXBEDS_VALUE,
        payload: value
    }
}