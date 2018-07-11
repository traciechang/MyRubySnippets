import { connect } from "react-redux";
import Sidebar from "./sidebar";
// import { executeSnippet, updateSnippet } from "../../actions/snippet_actions";

const mapStateToProps = state => ({
    mySnippets: state.session.currentUser.total_snippets
});

// const mapDispatchToProps = dispatch => ({
//     executeSnippet: (snippet) => dispatch(executeSnippet(snippet)),
//     updateSnippet: (snippet) => dispatch(updateSnippet(snippet))
// })

export default connect(
    mapStateToProps,
    null
)(Sidebar);