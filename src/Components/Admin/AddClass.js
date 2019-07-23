import React, { Component } from "react";
import { addClass } from "../actions/addClass";
import swal from "sweetalert";

class AddClass extends Component {
  state = {
    className: "",
    cityName: "",
    addedBy:
      this.props.adminData.firstName + " " + this.props.adminData.lastName,
    startingDate: null,
    faceToFaceDay: ""
  };
  handleSubmit = async e => {
    e.preventDefault();

    const {
      className,
      cityName,
      addedBy,
      startingDate,
      faceToFaceDay
    } = this.state;
    const userData = {
      className,
      cityName,
      addedBy,
      startingDate,
      faceToFaceDay
    };
    try {
      const response = await addClass(userData);
      console.log("from create class", response);
      swal("Success!", "Class added successfully!", "success");
      this.setState({ className: "", cityName: "" });
    } catch (error) {
      swal("Oops!", "Something went wrong", "error");
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState(() => {
      return {
        [name]: value
      };
    });
  };
  render() {
    const { cityName, className, startingDate, faceToFaceDay } = this.state;
    return (
      <form className="mb-5" onSubmit={this.handleSubmit} method="post">
        <h1>Add a class</h1>
        <div className="form-group">
          <label htmlFor="className" className="lead">
            Class Name*
          </label>
          <input
            type="text"
            name="className"
            id="className"
            className="form-control form-control-lg"
            placeholder="Class name"
            value={className}
            onChange={this.onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName" className="lead">
            City*
          </label>

          <select
            className="form-control form-control-lg"
            name="cityName"
            id="cityName"
            value={cityName}
            onChange={this.onChange}
            required
          >
            <option value="" disabled>
              Select here
            </option>
            <option>London</option>
            <option>Manchester</option>
            <option>Glasgow</option>
            <option>Rome</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="finishingDate" className="lead">
            Course Starting Date*
          </label>
          <input
            type="date"
            name="startingDate"
            id="startingDate"
            className="form-control form-control-lg"
            placeholder="Classes Starting Date"
            value={startingDate}
            onChange={this.onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName" className="lead">
            Day Of Face To Face Classes*
          </label>

          <select
            className="form-control form-control-lg"
            name="faceToFaceDay"
            id="faceToFaceDay"
            value={faceToFaceDay}
            onChange={this.onChange}
            required
          >
            <option value="" disabled>
              Select here
            </option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
        </div>
        <button type="submit" className="nav-link nav-btn-help">
          Submit
        </button>
      </form>
    );
  }
}

export default AddClass;
