import { combineReducers } from "redux";
import outputReducer from "./output_reducer";
import snippetReducer from "./snippet_reducer";

export const entitiesReducer = combineReducers({
    output: outputReducer,
    snippet: snippetReducer
})