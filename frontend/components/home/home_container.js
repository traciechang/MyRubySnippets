import { connect } from "react-redux";
import Home from "./home";

const mapStateToProps = state => ({
    currentUserId: state.session.currentUser.id,
    snippetId: state.session.currentUser.snippetId,
    snippet: state.session.currentUser.snippet
});

export default connect(
    mapStateToProps,
    null
)(Home);