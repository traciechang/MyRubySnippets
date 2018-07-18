import { RECEIVE_SNIPPET, RECEIVE_UPDATED_SNIPPET } from "../actions/snippet_actions";

const snippetReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SNIPPET:
            return action.snippet;
        case RECEIVE_UPDATED_SNIPPET:
            return action.snippet;
        default:
            return state;
    }
};

export default snippetReducer;