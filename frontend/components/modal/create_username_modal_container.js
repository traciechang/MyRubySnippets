import { connect } from "react-redux";
import CreateUsernameModal from "./create_username_modal";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    errors: state.errors.username
});

const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUsernameModal);