import { connect } from "react-redux";
import Snippet from "./snippet";
import { executeSnippet, updateSnippet } from "../../actions/snippet_actions";

const mapStateToProps = (state) => ({
    loggedIn: !!state.session.currentUser,
    currentUserId: state.session.currentUser.id,
    snippetId: state.entities.snippet.snippetId,
    snippet: state.entities.snippet.snippet,
    outputText: state.entities.output.output
});

const mapDispatchToProps = dispatch => ({
    executeSnippet: (snippet) => dispatch(executeSnippet(snippet)),
    updateSnippet: (snippet) => dispatch(updateSnippet(snippet))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Snippet);