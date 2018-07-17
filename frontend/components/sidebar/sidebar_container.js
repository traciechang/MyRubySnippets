import { connect } from "react-redux";
import Sidebar from "./sidebar";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    mySnippets: state.session.currentUser.total_snippets,
    snippetURL: state.entities.snippet.url
});

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);