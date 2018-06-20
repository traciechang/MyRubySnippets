import { RECEIVE_OUTPUT } from "../actions/snippet_actions";

// const defaultState = {
//     output: null
// }

const outputReducer = (state = {}, action) => {
    Object.freeze(state);
    console.log("in output reducer")
    console.log(action.output)

    switch(action.type) {
        case RECEIVE_OUTPUT:
            return {output: action.output}
        default:
            return state;
    }
};

export default outputReducer;