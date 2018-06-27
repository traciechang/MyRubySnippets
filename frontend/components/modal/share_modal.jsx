import React from "react";

class ShareModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            snippet_id: this.props.snippetId
        }
    }

    render() {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Share My Workspace</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={this.shareWorkspace}>
                            <input placeholder="Enter the username you want to share with" value={this.state.username} onChange={this.updateInput("username")}/>

                            <button>Share</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    shareWorkspace = (e) => {
        e.preventDefault();
        this.props.createSharedSnippet(this.state)
    }

    updateInput = key => {
        return e => this.setState({[key]: e.currentTarget.value})
    }
}

export default ShareModal;