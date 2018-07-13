import { connect } from "react-redux";
import Snippet from "./snippet";
import { executeSnippet, updateSnippet } from "../../actions/snippet_actions";

// const mapStateToProps = (state, ownProps) => ({
    // currentUserId: state.session.currentUser.id,
    // snippetId: state.session.currentUser.snippet_id,
    // snippet: state.session.currentUser.snippet,
    // outputText: state.entities.output.output,
    // sharedSnippets: state.session.currentUser.shared_snippets,
    // snippetURL: ownProps.location
// });

const mapDispatchToProps = dispatch => ({
    executeSnippet: (snippet) => dispatch(executeSnippet(snippet)),
    updateSnippet: (snippet) => dispatch(updateSnippet(snippet))
})

export default connect(
    null,
    mapDispatchToProps
)(Snippet);