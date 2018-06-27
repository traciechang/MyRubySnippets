import React from "react";
import ShareModalContainer from "../modal/share_modal_container";
import CreateUsernameModalContainer from "../modal/create_username_modal_container";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    displayModal = () => {
        console.log("in sidebar, displayModal")
        console.log(this.props.username)
        if (this.props.username) {
            return <ShareModalContainer />
        } else {
            return <CreateUsernameModalContainer />
        }
    }

    render() {
        return (
            <div class="wrapper">

    <nav id="sidebar">
        {/* <div class="sidebar-header">
            <h3></h3>
        </div> */}

        <ul class="list-unstyled components">
      
            <li>
                <a href="#">My Snippet</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Shared Snippets</a>
                {/* add class "collapse if u want it to start collapsed" */}
                <ul class=" list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Pusheen</a>
                    </li>
                    <li>
                        <a href="#">Stormy</a>
                    </li>
                    <li>
                        <a href="#">Pip</a>
                    </li>
                </ul>
            </li>
         
            <li class="custom-li">
                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">Share My Workspace</button>
            </li>
        </ul>
    </nav>
    {this.displayModal()}
</div>
        )
    }
}

export default Sidebar;