import React from "react";
import CreateSnippetModalContainer from "../modal/create_snippet_modal_container";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.snippetURL != this.props.snippetURL) {
            this.props.fetchUser();
        }
    }

    displayModal = () => {
        return <CreateSnippetModalContainer />
    }

    displayMySnippets = () => {
        return this.props.mySnippets.map(snip => <li><a href={`#/snippet/${snip.url}`}>{snip.name}</a></li>)
    }

    render() {
        return (
            <div class="wrapper">

                <nav id="sidebar">

                    <ul class="list-unstyled components">
                
                        <li class="custom-li">
                            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">Create New Snippet</button>
                        </li>

                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">My Snippets</a>
                            <ul class=" list-unstyled" id="pageSubmenu">
                                {this.displayMySnippets()}
                            </ul>
                        </li>
                    </ul>
                </nav>
                {this.displayModal()}
            </div>
        )
    }
}

export default Sidebar;