import React, { Component } from "react";

class Button extends Component {
  handleCilck = () => {
    if (this.props.handleSetTargetPage) {
      this.props.handleSetTargetPage();
    }
  };
  render() {
    return (
      <div className={this.props.className}>
        <button
          onClick={this.handleCilck}
          style={{
            maxWidth: 200,
            // backgroundColor: "lightgray",
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
