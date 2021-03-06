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
            url: this.props.snippetURL,
            name: this.props.snippetName
        }

        this.timeout = null;
        this.inputText;
    }

    componentDidUpdate() {
        if (this.state.url != this.props.match.params.snippetURL) {
            this.props.fetchSnippet(this.props.match.params.snippetURL)
            .then(() => {
                this.setState({
                    "id": this.props.snippetId,
                    "snippet": this.props.snippet,
                    "url": this.props.snippetURL,
                    "name": this.props.snippetName
                })

                this.inputText = undefined;
            });
        }
    }

    componentDidMount() {
        this.props.fetchSnippet(this.props.match.params.snippetURL)
        .then(() => {
            this.setState({
                "id": this.props.snippetId,
                "snippet": this.props.snippet,
                "url": this.props.snippetURL,
                "name": this.props.snippetName
            })
        });

        this.sub = App.cable.subscriptions.create('SnippetsChannel', {
            received: this.handleReceiveSnippet
        })
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

    handleReceiveSnippet = (receivedSnippet) => {
        if (this.props.snippetId === receivedSnippet.id) {
            clearTimeout(this.subTimeout);
            this.subTimeout = setTimeout(() => {
                this.setState({"snippet": receivedSnippet.snippet})
                this.inputText = undefined;
            }, 250);
        }
    }

    onChange = (newValue) => {
        this.inputText = newValue;

        const data = {
            id: this.props.snippetId,
            snippet: newValue,
            url: this.props.snippetURL,
            name: this.props.snippetName
        }
    
        clearTimeout(this.subTimeout);
        this.subTimeout = setTimeout(() => {
            this.sub.send(data);
        }, 250);

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.updateSnippet(this.state);
        }, 5000);
    }

    render() {
        console.log("rendering")
        console.log(this.inputText)
        let output = this.props.outputText ? this.props.outputText.output : ""
        let snippetText = this.inputText == undefined ? this.state.snippet : this.inputText;

        return (
            <div class="home">
                <NavigationBarContainer />

                <div class="home-body row">
                    {this.displaySidebar()}
    
                    <div class="editor-and-output col-9">
                        <div class="editor-and-output-div">
                            <AceEditor
                                mode="ruby"
                                theme="monokai"
                                onChange={this.onChange}
                                fontSize={14}
                                name="myrubee"
                                value={snippetText}
                                wrapEnabled="true"
                                editorProps={{$blockScrolling: true}} />

                            <div class="output text-white">{output}</div>
                        </div>

                        <div class="button-and-label-div">
                            <div class="button-div">
                                <button class="run-button" onClick={this.execute}>Run</button>
                            </div>
                            <div class="label-div">
                                <div class="label text-white">Working on: {this.state.name}</div>
                            </div>
                        </div>
                    </div>
                </div>

 
            </div>
        )
    }
}

export default Home;