import { RECEIVE_CURRENT_USER } from "../actions/user_actions";

const defaultState = {
    currentUser: null
}

export const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {currentUser: action.currentUser};
        default:
            return state;
    }
}