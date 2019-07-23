import React, { Component } from "react";

class NavTabItem extends Component {
  state = { active: "" };

  handleNavItemOnClick = () => {
    this.props.toggleClass();
    this.props.handlePageChange();
  };
  render() {
    return (
      <li class="nav-item" onClick={this.handleNavItemOnClick}>
        <a
          class={`nav-link ${this.props.className ? this.props.className : ""}`}
          href="#"
        >
          {this.props.tabName}
        </a>
      </li>
    );
  }
}

export default NavTabItem;
