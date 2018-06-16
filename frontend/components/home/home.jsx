import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("hitting Home render!!")
        return (
            <div>"Howdy!</div>
        )
    }
}

export default Home;