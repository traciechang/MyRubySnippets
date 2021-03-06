import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavigationBar from "./navigation_bar";

const mapStateToProps = state => ({
    loggedIn: !!state.session.currentUser,
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationBar);