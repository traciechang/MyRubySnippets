import { connect } from "react-redux";
import Home from "./home";
import { executeSnippet, updateSnippet } from "../../actions/snippet_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    currentUserId: state.session.currentUser.id,
    snippetId: state.entities.snippet.snippet_id,
    snippet: state.entities.snippet.snippet,
    snippetURL: state.entities.snippet.url,
    outputText: state.entities.output.output
});

const mapDispatchToProps = dispatch => ({
    executeSnippet: (snippet) => dispatch(executeSnippet(snippet)),
    updateSnippet: (snippet) => dispatch(updateSnippet(snippet)),
    fetchUser: () => dispatch(fetchUser())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);