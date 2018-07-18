import React from "react";
import brace from "brace";
import AceEditor from "react-ace";
import NavigationBarContainer from "../navigation_bar/navigation_bar_container";
import SidebarContainer from "../sidebar/sidebar_container";

import 'brace/mode/ruby';
import 'brace/theme/monokai';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.currentUserId
        }
    }

    componentDidMount() {
        this.props.fetchUser();
    }
    componentWillReceiveProps(nextProps) {
        if (((this.props.snippetURL == null) && (nextProps.snippetURL != null)) || (nextProps.snippetURL != this.props.snippetURL)) {
            this.props.history.push(`/snippet/${nextProps.snippetURL}`);
        }
    }
    
    render() {
        return (
            <div class="home">
                <NavigationBarContainer />

                <div class="home-body row">
                    <SidebarContainer />

                    <div class="home-text col-9">
                        <div class="text-center">
                            <h1 class="home-h1">MyRubySnippets</h1>

                            <p class="home-p text-white">Welcome! Create a New Snippet to get started. To pair program, simply share the unique snippet link with your team - they do not need an account to work on a snippet with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;