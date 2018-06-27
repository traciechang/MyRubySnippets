import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
    type: "RECEIVE_CURRENT_USER",
    currentUser
});

export const receiveErrors = errors => ({
    type: "RECEIVE_ERRORS",
    errors
});

export const fetchUser = () => dispatch => (
    UserAPIUtil.fetchUser().then(response => {
        dispatch(receiveCurrentUser(response))
    })
);

export const updateUser = (user) => dispatch => (
    UserAPIUtil.updateUser(user).then(response => (
        dispatch(receiveCurrentUser(response))
    ), responseError => (
        dispatch(receiveErrors(responseError.responseJSON))
    ))
);