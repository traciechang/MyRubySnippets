import * as SessionAPIUtil from "../util/session_api_util";
import { receiveCurrentUser } from "../actions/user_actions";

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then((response) => (
        dispatch(receiveCurrentUser(null))
    ))
);