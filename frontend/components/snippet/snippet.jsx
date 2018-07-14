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
            user_id: this.props.currentUserId
        }

        this.timeout = null;
    }

    componentDidUpdate() {
        console.log("in home, componentDidUpdate")
        console.log(this.state.snippet)
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.updateSnippet(this.state);
        }, 5000);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("in Home, componentWillReceiveProps")
    //     console.log(nextProps.snippetURL)
    //     console.log(nextProps.snippet)
    //     console.log(nextProps.snippetId)
    //     if (nextProps.snippetURL != this.props.snippetURL) {
    //         this.props.history.push(`/snippets/${nextProps.snippetURL}`);
    //     }
    // }

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
        console.log('change',newValue);
        this.setState({"snippet": newValue})
    }

    // render() {
    //     console.log("In snippet, render")
    //     console.log(this.props.match.params.snippetURL)
    //     return(
    //         <div>hello</div>
    //     )
    // }
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