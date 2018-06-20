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

        this.execute = this.execute.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    execute(e) {
        console.log("in home component, execute")
        console.log(this.state)
        e.preventDefault();
        this.props.executeSnippet(this.state)
    }

    onChange(newValue) {
        // console.log('change',newValue);
        return e => this.setState({["snippet"]: newValue})
    }

    render() {
        console.log("home")
        console.log(this.props.outputText)
        let output = this.props.outputText ? this.props.outputText.output : ""

        return (
            <div>
                <NavigationBarContainer />

                <AceEditor
                    mode="ruby"
                    theme="monokai"
                    onChange={this.onChange}
                    fontSize={14}
                    name="myrubee"
                    value={this.props.snippet}
                    editorProps={{$blockScrolling: true}} />

                <button onClick={this.execute}>Run</button>

                <p>{output}</p>
            </div>
        )
    }
}

export default Home;