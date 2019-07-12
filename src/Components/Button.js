import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            width: 200,
            backgroundColor: "lightgray",
            height: 50,
            fontSize: 20
          }}
        >
          <b> {this.props.title}</b>
        </button>
      </div>
    );
  }
}

export default Button;
