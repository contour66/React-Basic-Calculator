import React, { Component } from "react";

class Button extends Component {
    state = {
        number: 0
    };

    handleClick = (event) => {

        console.log(event.target.value);

    }
    //We retreive the property value below.
    render() {
        return <button
            onClick={this.handleClick} value={this.props.value}>{this.props.value}</button>;
    }
}
export default Button;