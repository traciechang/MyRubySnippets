import { combineReducers } from "redux";
import { sessionReducer } from "./session_reducer";
// import { entitiesReducer } from "./entities_reducer";
import outputReducer from "./output_reducer";

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: outputReducer
})

export default rootReducer;