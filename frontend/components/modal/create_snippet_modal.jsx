import React from "react";

class CreateSnippetModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUserId,
            snippet: "",
            url: this.generateRandomURL,
            name: "",
            errors: []
        }
    }

    componentDidMount() {
        this.props.fetchUser();
        $('#exampleModal').on('hidden.bs.modal', () => {
            this.setState({
                "name": "",
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

    createSnippet = (e) => {
        e.preventDefault();
        this.props.createSnippet(this.state)
        .then(() => {
            $('.modal-backdrop').remove();
            $('.modal').modal('hide');
        });
    }

    displayErrors() {
        return this.state.errors.map(err => <li>{err}</li>)
    }

    generateRandomURL = () => {
        let randomString = require("randomstring");
        return randomString.generate();
    }

    render() {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create New Snippet</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Snippet Name:
                        <form onSubmit={this.createSnippet}>
                            <input value={this.state.name} placeholder="MySnippet" required onChange={this.updateInput("name")}/>

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

    // updateUser = e => {
    //     e.preventDefault();
    //     this.props.updateUser(this.state)
    //     .then(() => {
    //         $('.modal-backdrop').remove();
    //     });
    // }
}

export default CreateSnippetModal;