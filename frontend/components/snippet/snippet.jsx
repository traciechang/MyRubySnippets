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
            id: this.props.snippetId,
            snippet: this.props.snippet,
            url: this.props.snippetURL
        }

        this.timeout = null;
    }

    componentDidUpdate() {
        console.log("in snippet, componentDidUpdate")
        console.log(this.state.snippet)
        if (this.state.url != this.props.match.params.snippetURL) {
            this.props.fetchSnippet(this.props.match.params.snippetURL)
            .then(() => {
                this.setState({
                    "id": this.props.snippetId,
                    "snippet": this.props.snippet,
                    "url": this.props.snippetURL
                })
            });
        }
    }

    componentDidMount() {
        console.log("in Snippet, ComponentDidMount")
        this.props.fetchSnippet(this.props.match.params.snippetURL)
        .then(() => {
            this.setState({
                "id": this.props.snippetId,
                "snippet": this.props.snippet,
                "url": this.props.snippetURL
            })
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loggedIn && !nextProps.loggedIn) {
            this.props.history.push("/")
        }

        if (((this.props.snippetURL == null) && (nextProps.snippetURL != null)) || (nextProps.snippetURL != this.props.snippetURL)) {
            this.props.history.push(`/snippet/${nextProps.snippetURL}`);
        }
    }

    displaySidebar = () => {
        if (this.props.loggedIn) {
            return <SidebarContainer />
        }
    }

    execute = (e) => {
        e.preventDefault();
        this.props.executeSnippet(this.state)
    }

    onChange = (newValue) => {
        console.log("In Snippet, onChange")
        this.setState({"snippet": newValue});

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.updateSnippet(this.state);
        }, 5000);
    }

    render() {
        let output = this.props.outputText ? this.props.outputText.output : ""

        return (
            <div class="home">
                <NavigationBarContainer />

                <div class="home-body row">
                    {this.displaySidebar()}
                    {/* <SidebarContainer /> */}
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

export default Home;