import React from "react";
import brace from "brace";
import AceEditor from "react-ace";
import NavigationBarContainer from "../navigation_bar/navigation_bar_container";

import 'brace/mode/ruby';
import 'brace/theme/monokai';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.snippetId,
            snippet: this.props.snippet,
            user_id: this.props.currentUserId
        }

        this.timeout = null;
        this.execute = this.execute.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidUpdate() {
        console.log("in home, componentDidUpdate")
        console.log(this.state.snippet)
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.updateSnippet(this.state);
        }, 5000);
    }

    // componentDidMount() {
    //     console.log("home - componentDidMount")
    //     // const editor = document.getElementById('ace-editor');
    //     let timeout = null;

    //     this.aceEditor.onkeyup = () => {
    //         clearTimeout(timeout);

    //         timeout = setTimeout(() => {
    //             this.props.updateSnippet(this.state);
    //         }, 5000);
    //     };
    // }

    execute(e) {
        e.preventDefault();
        console.log("in home component, execute")
        console.log(this.state.snippet)
        this.props.executeSnippet(this.state)
    }

    onChange(newValue) {
        console.log('change',newValue);
        this.setState({"snippet": newValue})
    }

    render() {
        let output = this.props.outputText ? this.props.outputText.output : ""

        return (
            <div class="home">
                <NavigationBarContainer />

                <div class="home-body row">
                    <AceEditor
                        mode="ruby"
                        theme="monokai"
                        onChange={this.onChange}
                        fontSize={14}
                        name="myrubee"
                        value={this.state.snippet}
                        editorProps={{$blockScrolling: true}} />

                    <div class="button-and-output col-5">
                        <button class="run-button" onClick={this.execute}>Run</button>

                        <div class="output text-white">{output}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;