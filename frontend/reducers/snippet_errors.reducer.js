import { RECEIVE_SNIPPET, RECEIVE_SNIPPET_ERRORS } from "../actions/snippet_actions";


export const snippetErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SNIPPET:
            return [];
        case RECEIVE_SNIPPET_ERRORS:
            return action.errors;
        default:
            return state;
    }
}