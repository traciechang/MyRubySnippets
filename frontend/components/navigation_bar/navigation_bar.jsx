import React from "react";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        // this.logout = this.props.logout.bind(this);
    }

    displayUser = () => {
        if (this.props.currentUser.username) {
            return <span class="text-white signed-in-as">Welcome, {this.props.currentUser.username}!</span>
        } else {
            return  <span class="text-white signed-in-as">Signed in as: {this.props.currentUser.email}</span>
        }
    }

    logoutButton = () => {
        return <button class="btn-outline-info logout-button" onClick={this.props.logout}>Log Out</button>
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