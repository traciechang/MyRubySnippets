import { connect } from "react-redux";
import Snippet from "./snippet";
import { executeSnippet, fetchSnippet, updateSnippet } from "../../actions/snippet_actions";

const mapStateToProps = (state) => {
    console.log("in Snippet Container")
    console.log(state.entities.snippet.snippet_id)
    return ({
    loggedIn: !!state.session.currentUser,
    snippetId: state.entities.snippet.snippet_id,
    snippet: state.entities.snippet.snippet,
    snippetURL: state.entities.snippet.url,
    outputText: state.entities.output.output
})};

const mapDispatchToProps = dispatch => ({
    executeSnippet: (snippet) => dispatch(executeSnippet(snippet)),
    fetchSnippet: (snippetURL) => dispatch(fetchSnippet(snippetURL)),
    updateSnippet: (snippet) => dispatch(updateSnippet(snippet)),
    fetchUser: () => dispatch(fetchUser())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Snippet);