import { connect } from "react-redux";
import ShareModal from "./share_modal";
import { createSharedSnippet } from "../../util/shared_snippet_api_util";

const mapStateToProps = state => ({
    snippedId: state.session.currentUser.snippet
});

const mapDispatchToProps = dispatch => ({
    createSharedSnippet: (sharedSnippet) => dispatch(createSharedSnippet(sharedSnippet))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareModal);