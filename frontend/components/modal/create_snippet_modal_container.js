import { connect } from "react-redux";
import CreateSnippetModal from "./create_snippet_modal";
import { fetchUser } from "../../actions/user_actions";
import { createSnippet } from "../../actions/snippet_actions";

const mapStateToProps = state => ({
    currentUserId: state.session.currentUser.id,
    errors: state.errors.username,
});

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser()),
    createSnippet: (snippet) => dispatch(createSnippet(snippet))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSnippetModal);