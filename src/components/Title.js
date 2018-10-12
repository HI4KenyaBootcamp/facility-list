import React, { Component } from "react";

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "KMHFL" };
    }
    render() {
        return (
            <div
                className={this.props.cname}
            >
                {this.state.name}
            </div>
        );
    }
}

export default Title;
