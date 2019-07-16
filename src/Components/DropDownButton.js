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
      <div className="col-12 col-lg-12">
        <div className="row justify-content-between align-items-center">
          <div className="col-4 col-sm-4 col-lg-4">
            <h2> {this.props.title}:</h2>
          </div>
          {isTitleEqualToClass && (
            <select
              className="col-8 col-sm-7 col-lg-8"
              value={this.state.selectValue}
              onChange={this.handleChange}
            >
              <option>{"Select Class"}</option>
              {this.props.dataToDispaly.map(option => (
                <option>{option}</option>
              ))}
            </select>
          )}
          {!isTitleEqualToClass && !isTitleEqualToStudent && (
            <select className="col-8 col-sm-7 col-lg-8">
              {isTitleEqualToStudent && <option>{"All Class"}</option>}
              {this.props.dataToDispaly.map(option => (
                <option>{option}</option>
              ))}
            </select>
          )}
          {isTitleEqualToStudent && (
            <select className="col-8 col-sm-7 col-lg-6">
              <option>{"All Class"}</option>
              {this.props.dataToDispaly.map(option => (
                <option>{option}</option>
              ))}
            </select>
          )}
        </div>
      </div>
    );
  }
}

export default DropDownButton;
