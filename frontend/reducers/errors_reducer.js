import { combineReducers } from "redux";
import { usernameErrorsReducer} from "./username_errors_reducer";
import { sharedSnippetErrorsReducer } from "./shared_snippet_errors_reducer";

const errorsReducer = combineReducers({
    username: usernameErrorsReducer,
    sharedSnippet: sharedSnippetErrorsReducer
});

export default errorsReducer;