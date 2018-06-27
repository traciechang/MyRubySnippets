import { combineReducers } from "redux";
import { usernameErrorsReducer} from "./username_errors_reducer";

const errorsReducer = combineReducers({
    username: usernameErrorsReducer
});

export default errorsReducer;