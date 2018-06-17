import React from "react";
import brace from "brace";
import AceEditor from "react-ace";

import 'brace/mode/ruby';
import 'brace/theme/monokai';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.props.logout.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        console.log('change',newValue);
    }

    render() {
        return (
            <div>

                <button onClick={this.logout}>Log Out</button>

                <AceEditor
                    mode="ruby"
                    theme="monokai"
                    onChange={this.onChange}
                    fontSize={14}
                    name="myrubee"
                    editorProps={{$blockScrolling: true}} />
            </div>
        )
    }
}

export default Home;