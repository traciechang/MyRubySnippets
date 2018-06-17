import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.props.logout.bind(this);
    }

    render() {
        console.log("hitting Home render!!")
        return (
            <div>"Howdy!

                <button onClick={this.logout}>Log Out</button>
            </div>
        )
    }
}

export default Home;