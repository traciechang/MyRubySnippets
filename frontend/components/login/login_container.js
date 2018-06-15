import { connect } from "react-redux";
import Login from "./login"
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state) => ({
    loggedIn: !!state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(fetchUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);