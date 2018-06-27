import { connect } from "react-redux";
import ShareModal from "./share_modal";
import { createSharedSnippet } from "../../actions/shared_snippet_actions";

const mapStateToProps = state => ({
    snippetId: state.session.currentUser.snippet_id,
    errors: state.errors.sharedSnippet
});

const mapDispatchToProps = dispatch => ({
    createSharedSnippet: (sharedSnippet) => dispatch(createSharedSnippet(sharedSnippet))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareModal);