import React, { Component } from "react";
import axios from "axios";
import { addUser } from "../Components/actions/addUser";
// import { setToken, loggedIn } from "../Auth/index";
import swal from "sweetalert";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      tel: "",
      userType: "",
      password: "",
      cyfClass: "",
      isStudent: false
    };
  }
  UNSAFE_componentWillMount() {
    // if (loggedIn()) {
    //   this.props.history.replace("/categories");
    // }
  }
  onChange = e => {
    const { name, value } = e.target;
    this.setState(
      () => {
        return {
          [name]: value
        };
      },
      () => {
        if (this.state.userType === "Student")
          this.state(prevState => {
            return { isStudent: !prevState.isStudent };
          });
      }
    );
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      city,
      tel,
      gender,
      userType,
      cyfClass,
      password
    } = this.state;
    const userData = {
      firstName,
      lastName,
      email,
      city,
      tel,
      gender,
      userType,
      cyfClass,
      password
    };
    try {
      const token = await addUser(userData);
      // setToken(token.data.token);
      this.props.history.replace("/");
    } catch (err) {
      if (err.response) {
        return swal("Cancelled", err.response.data.msg, "error");
      }
      return swal(
        "Cancelled",
        "Somethings went wrong, please try again later.",
        "error"
      );
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      city,
      tel,
      gender,
      userType,
      cyfClass,
      isStudent,
      password
    } = this.state;
    const { err, msg } = this.props;
    return (
      <div className="register-container">
        <div className="register">
          {msg && <p className="success">{msg}</p>}
          {err && (
            <p className="error">
              Somethings went wrong please try again later.
            </p>
          )}
          <h3>Welcome To Code You Future Slack Dashboard</h3>
          <h5 className="text-danger">
            You should join Code Your Future slack Workspace to be able to
            register
          </h5>
          <form className="mb-4" onSubmit={this.handleSubmit} method="post">
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control form-control-lg"
                placeholder="First name"
                value={firstName}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control form-control-lg"
                placeholder="Last name"
                value={lastName}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="example@example.com"
                value={email}
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
                name="city"
                id="city"
                value={city}
                onChange={this.onChange}
                required
              >
                <option value="" disabled>
                  Select here
                </option>
                <option value="Male">London</option>
                <option value="Female">Manchester</option>
                <option value="Other">Glasgow</option>
                <option value="Other">Rome</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="lead">
                Phone Number*
              </label>
              <input
                type="tel"
                name="tel"
                className="form-control form-control-lg"
                id="tel"
                placeholder=" E.g., 07712345678 or 02079460637"
                value={tel}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group ">
              <label htmlFor="firstName" className="lead">
                Gender
              </label>
              <select
                className="form-control form-control-lg"
                name="gender"
                id="gender"
                value={gender}
                onChange={this.onChange}
                required
              >
                <option value="" disabled>
                  Select here
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="PreferNotToSay">Prefer not to say</option>
              </select>
            </div>
            <div className="form-group ">
              <label htmlFor="firstName" className="lead">
                Join as*
              </label>
              <select
                className="form-control form-control-lg"
                name="userType"
                id="userType"
                value={userType}
                onChange={this.onChange}
                required
              >
                <option value="" disabled>
                  Select here
                </option>
                <option value="student">Student</option>
                <option value="mentor">Mentor</option>
              </select>
            </div>
            {isStudent && (
              <div className="form-group ">
                <label htmlFor="firstName" className="lead">
                  What is your cyf class*
                </label>
                <select
                  className="form-control form-control-lg"
                  name="cyfClass"
                  id="cyfClass"
                  value={cyfClass}
                  onChange={this.onChange}
                  required
                >
                  <option value="" disabled>
                    Select here
                  </option>
                  <option value="student">Rome-class1</option>
                  <option value="student">Manchester-class2</option>
                  <option value="student">Glasgow-class3</option>
                  <option value="mentor">London-class5</option>
                </select>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                Password*
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={password}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                Confirm Password*
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={password}
                onChange={this.onChange}
                required
              />
            </div>
            <button type="submit" className="nav-link nav-btn-help">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
