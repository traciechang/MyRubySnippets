import { combineReducers } from "redux";
import outputReducer from "./output_reducer";

export const entitiesReducer = combineReducers({
    output: outputReducer
})