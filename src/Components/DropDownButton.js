import React, { Component } from "react";

class DropDownButton extends Component {
  state = { selectValue: "" };
  handleChange = e => {
    this.setState({ selectValue: e.target.value });
    console.log(this.state.selectValue);
    this.props.getStudents(e.target.value);
  };
  render() {
    const isTitleEqualToClass = this.props.title === "Class" ? true : false;
    const isTitleEqualToStudent =
      this.props.title === "Students" ? true : false;
    return (
      <div className="d-flex justify-content-between">
        <div className="w-30 ">
          <h2 style={{ height: 10 }}> {this.props.title}:</h2>
        </div>
        {isTitleEqualToClass && (
          <select
            value={this.state.selectValue}
            onChange={this.handleChange}
            style={{ height: 40, width: "60%" }}
          >
            {this.props.dataToDispaly.map(option => (
              <option>{option}</option>
            ))}
          </select>
        )}
        {!isTitleEqualToClass && (
          <select style={{ height: 40, width: "60%" }}>
            {isTitleEqualToStudent && <option>{"All Class"}</option>}
            {this.props.dataToDispaly.map(option => (
              <option>{option}</option>
            ))}
          </select>
        )}
      </div>
    );
  }
}

export default DropDownButton;
