import { connect } from "react-redux";
import Home from "./home";
import { executeSnippet, updateSnippet } from "../../actions/snippet_actions";

const mapStateToProps = state => ({
    currentUserId: state.session.currentUser.id,
    username: state.session.currentUser.username,
    snippetId: state.session.currentUser.snippet_id,
    snippet: state.session.currentUser.snippet,
    outputText: state.entities.output.output,
    sharedSnippets: state.session.currentUser.shared_snippets
});

const mapDispatchToProps = dispatch => ({
    executeSnippet: (snippet) => dispatch(executeSnippet(snippet)),
    updateSnippet: (snippet) => dispatch(updateSnippet(snippet))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);