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

    // componentDidUpdate() {
    //     console.log("in home, componentDidUpdate")
    //     console.log(this.state.snippet)
    //     clearTimeout(this.timeout);

    //     this.timeout = setTimeout(() => {
    //         this.props.updateSnippet(this.state);
    //     }, 5000);
    // }

    componentDidMount() {
        console.log("in Home, componentDidMount")
        this.props.fetchUser();
    }
    componentWillReceiveProps(nextProps) {
        console.log("in Home, componentWillReceiveProps")
        console.log((((this.props.snippetURL == null) && (nextProps.snippetURL != null)) || (nextProps.snippetURL != this.props.snippetURL)))
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
                    {/* <div class="editor-and-output col-9">
                        <AceEditor
                            mode="ruby"
                            theme="monokai"
                            onChange={this.onChange}
                            fontSize={14}
                            name="myrubee"
                            value={this.state.snippet}
                            editorProps={{$blockScrolling: true}} />

                        <div class="button-and-output">
                            <button class="run-button" onClick={this.execute}>Run</button>

                            <div class="output text-white">{output}</div>
                        </div>
                    </div> */}
                    <div>Home</div>
                </div>

 
            </div>
        )
    }
}

export default Home;