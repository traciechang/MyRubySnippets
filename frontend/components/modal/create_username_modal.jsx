import React from "react";

class CreateUsernameModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            errors: []
        }
    }

    componentDidMount() {
        $('#exampleModal').on('hidden.bs.modal', () => {
            this.setState({
                "username": "",
                "errors": []
            })
        })
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                "errors": nextProps.errors
            })
        }
    }

    displayErrors() {
        return this.state.errors.map(err => <li>{err}</li>)
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
                        Please create a username to use this feature.
                        <form onSubmit={this.updateUser}>
                            <input placeholder="Enter username" value={this.state.username} onChange={this.updateInput("username")}/>

                            <button>Create</button>
                        </form>
                        {this.displayErrors()}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    updateInput = key => {
        return e => this.setState({[key]: e.currentTarget.value})
    }

    updateUser = e => {
        e.preventDefault();
        this.props.updateUser(this.state)
        .then(() => {
            $('.modal-backdrop').remove();
        });
    }
}

export default CreateUsernameModal;