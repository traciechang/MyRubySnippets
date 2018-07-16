import { connect } from "react-redux";
import Snippet from "./snippet";
import { executeSnippet, fetchSnippet, updateSnippet } from "../../actions/snippet_actions";

const mapStateToProps = (state) => ({
    loggedIn: !!state.session.currentUser,
    // currentUserId: state.session.currentUser.id,
    snippetId: state.entities.snippet.snippet_id,
    snippet: state.entities.snippet.snippet,
    outputText: state.entities.output.output
});

const mapDispatchToProps = dispatch => ({
    executeSnippet: (snippet) => dispatch(executeSnippet(snippet)),
    fetchSnippet: (snippetURL) => dispatch(fetchSnippet(snippetURL)),
    updateSnippet: (snippet) => dispatch(updateSnippet(snippet))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Snippet);