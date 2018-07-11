import { connect } from "react-redux";
// import CreateUsernameModal from "./create_username_modal";
import CreateSnippetModal from "./create_snippet_modal";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = state => {
    let snippetNumber = state.session.currentUser.total_snippets != [] ? state.session.currentUser.total_snippets + 1 : 1

    return ({
    currentUserId: state.session.currentUser.id,
    nextSnippetName: snippetNumber,
    errors: state.errors.username
})};

const mapDispatchToProps = dispatch => ({
    // updateUser: (user) => dispatch(updateUser(user))
    createSnippet: (snippet) => dispatch(createSnippet(snippet))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSnippetModal);