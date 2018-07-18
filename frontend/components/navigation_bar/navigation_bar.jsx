import React from "react";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    displayUser = () => {
        if (this.props.loggedIn) {
            return  <span class="text-white signed-in-as">Signed in as: {this.props.currentUser.email}</span>
        }
    }

    logoutButton = () => {
        if (this.props.loggedIn) {
            return <button class="btn-outline-info logout-button" onClick={this.props.logout}>Log Out</button>
        } else {
            return <Link class="sign-in-link" to="/">Sign In</Link>
        }
    }

    render() {
        return (
            <div class="navbar">
                <span class="navbar-brand text-white">MyRubySnippets
                </span>

                <div>
                    {this.displayUser()}
                    {this.logoutButton()}
                </div>
            </div>
        )
    }
}

export default NavigationBar;