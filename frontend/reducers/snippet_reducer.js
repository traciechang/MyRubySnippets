import { RECEIVE_SNIPPET } from "../actions/snippet_actions";

// const defaultState = {
//     output: null
// }

const snippetReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SNIPPET:
            return action.snippet;
        default:
            return state;
    }
};

export default snippetReducer;