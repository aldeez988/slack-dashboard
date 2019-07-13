import React, { Component } from "react";

class DropDownButton extends Component {
  render() {
    return (
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Student
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Deepa
          </a>
          <a class="dropdown-item" href="#">
            Elamin
          </a>
          <a class="dropdown-item" href="#">
            Abz
          </a>
        </div>
      </div>
    );
  }
}

export default DropDownButton;
