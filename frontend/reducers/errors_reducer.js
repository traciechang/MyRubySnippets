import { combineReducers } from "redux";
import { usernameErrorsReducer} from "./username_errors_reducer";
import { snippetErrorsReducer } from "./snippet_errors.reducer";

const errorsReducer = combineReducers({
    username: usernameErrorsReducer,
    snippet: snippetErrorsReducer
});

export default errorsReducer;