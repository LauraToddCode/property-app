import { combineReducers } from "redux";
import saveReducer from "./save/save-reducer"

const rootReducer = combineReducers({
    save: saveReducer
});

export default rootReducer;