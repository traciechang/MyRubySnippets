import React from "react";
import brace from "brace";
import AceEditor from "react-ace";
import NavigationBarContainer from "../navigation_bar/navigation_bar_container";

import 'brace/mode/ruby';
import 'brace/theme/monokai';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        console.log('change',newValue);
    }

    render() {
        return (
            <div>
                <NavigationBarContainer />

                <AceEditor
                    mode="ruby"
                    theme="monokai"
                    onChange={this.onChange}
                    fontSize={14}
                    name="myrubee"
                    editorProps={{$blockScrolling: true}} />

                <button>Run</button>
            </div>
        )
    }
}

export default Home;