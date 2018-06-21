import { RECEIVE_CURRENT_USER } from "../actions/user_actions";
import { RECEIVE_SNIPPET } from "../actions/snippet_actions";
import merge from "lodash/merge";

const defaultState = {
    currentUser: null
}

export const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    console.log("in session reducer")
    console.log(action.snippet)

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {currentUser: action.currentUser};
        case RECEIVE_SNIPPET:
            return merge({}, state, {currentUser: {snippet: action.snippet.snippet, snippet_id: action.snippet.snippet_id}})
        default:
            return state;
    }
}