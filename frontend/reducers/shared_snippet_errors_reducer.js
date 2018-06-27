import { RECEIVE_SHARED_SNIPPET } from "../actions/shared_snippet_actions";
import { RECEIVE_SHARED_SNIPPET_ERRORS } from "../actions/shared_snippet_actions";

export const sharedSnippetErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SHARED_SNIPPET:
            return [];
        case RECEIVE_SHARED_SNIPPET_ERRORS:
            return action.errors;
        default:
            return state;
    }
}