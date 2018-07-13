import { connect } from "react-redux";
// import CreateUsernameModal from "./create_username_modal";
import CreateSnippetModal from "./create_snippet_modal";
// import { updateUser } from "../../actions/user_actions";
import { createSnippet } from "../../actions/snippet_actions";

const mapStateToProps = state => {
    let snippetNumber = state.session.currentUser.total_snippets != [] ? state.session.currentUser.total_snippets.length + 1 : 1

    return ({
    currentUserId: state.session.currentUser.id,
    nextSnippetName: snippetNumber,
    errors: state.errors.username,
    snippet: state.entities.snippet
})};

const mapDispatchToProps = dispatch => ({
    // updateUser: (user) => dispatch(updateUser(user))
    createSnippet: (snippet) => dispatch(createSnippet(snippet))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSnippetModal);