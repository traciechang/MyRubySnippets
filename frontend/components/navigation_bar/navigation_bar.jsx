import React from "react";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.props.logout.bind(this);
    }

    logoutButton() {
        return <button class="btn-outline-info logout-button" onClick={this.logout}>Log Out</button>
    }

    render() {
        return (
            <div class="navbar">
                <span class="navbar-brand text-white">MyRubySnippets
                </span>

                <div>
                    <span class="text-white signed-in-as">Signed in as: {this.props.currentUser.email}</span>
                    {this.logoutButton()}
                </div>
            </div>
        )
    }
}

export default NavigationBar;