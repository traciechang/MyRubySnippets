import React from "react";
import brace from "brace";
import AceEditor from "react-ace";
import NavigationBarContainer from "../navigation_bar/navigation_bar_container";
import Sidebar from "../sidebar/sidebar";

import 'brace/mode/ruby';
import 'brace/theme/monokai';

class Snippet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.snippetId,
            snippet: this.props.snippet,
            user_id: this.props.currentUserId
        }

        this.timeout = null;
    }

    componentDidUpdate() {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.updateSnippet(this.state);
        }, 5000);
    }

    execute = (e) => {
        e.preventDefault();
        this.props.executeSnippet(this.state)
    }

    onChange = (newValue) => {
        this.setState({"snippet": newValue})
    }

    render() {
        let output = this.props.outputText ? this.props.outputText.output : ""

        return (
            <div class="home">
                <NavigationBarContainer />

                <div class="home-body row">
                    <Sidebar username={this.props.username} sharedSnippets={this.props.sharedSnippets}/>
                    <div class="editor-and-output col-9">
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
                    </div>
                </div>

 
            </div>
        )
    }
}

export default Snippet;