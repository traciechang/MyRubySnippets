import { RECEIVE_CURRENT_USER } from "../actions/user_actions";
// import merge from "lodash/merge";

const defaultState = {
    currentUser: null
}

export const sessionReducer = (state = defaultState, action) => {
    console.log("in session reducer")
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {currentUser: action.currentUser};
            // return merge({}, state, {currentUser: action.currentUser});
        default:
            return state;
    }
}