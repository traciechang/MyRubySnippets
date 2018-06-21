import { connect } from "react-redux";
import Home from "./home";
import { executeSnippet, updateSnippet } from "../../actions/snippet_actions";

const mapStateToProps = state => ({
    currentUserId: state.session.currentUser.id,
    snippetId: state.session.currentUser.snippet_id,
    snippet: state.session.currentUser.snippet,
    outputText: state.entities.output
});

const mapDispatchToProps = dispatch => ({
    executeSnippet: (snippet) => dispatch(executeSnippet(snippet)),
    updateSnippet: (snippet) => dispatch(updateSnippet(snippet))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);