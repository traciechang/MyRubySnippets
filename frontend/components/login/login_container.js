import { connect } from "react-redux";
import Login from "./login"
import { fetchUser } from "../../actions/user_actions";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
    console.log("in login container, mapState toprops")
    console.log(state.session.currentUser)
    return ({
    loggedIn: !!state.session.currentUser
})}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(fetchUser()),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);