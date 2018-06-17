import { connect } from "react-redux";
import Login from "./login"
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state) => {
    console.log("in login container, mapState toprops")
    console.log(state.session.currentUser)
    return ({
    loggedIn: !!state.session.currentUser
})}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(fetchUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);