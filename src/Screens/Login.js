import React, { Component } from "react";
import { getStudentMessages } from "../Components/actions/getStudentMessages";
import { login } from "../Components/actions/login";
import { getAllClasses } from "../Components/actions/addClass";
import swal from "sweetalert";
import "./login.css";

class Login extends Component {
  state = { email: "", password: "", isLoading: false, userData: {} };

  confirmUser = async user => {
    try {
      const response = await login(user);
      console.log("login response ", response.data.admin);
      this.setState(prevState => {
        return {
          isLoading: !prevState.isLoading,
          userData: response.data
        };
      });

      if (response.data.admin) {
        this.props.history.push("/admin", { ...this.state.userData });
      } else if (response.data.userType === "Mentor") {
        this.props.history.push("/mentor", { ...this.state.userData });
      } else {
        this.props.history.push("/sudentpage", { ...this.state.userData });
      }
    } catch (error) {
      swal("Oops!", "Please check your username and password!", "error");
      console.log("login response ", error);

      this.setState(prevState => {
        return {
          isLoading: !prevState.isLoading
        };
      });
    }
  };
  handleSubmit = e => {
    const { email, password } = this.state;
    this.setState(prevState => {
      return {
        isLoading: !prevState.isLoading
      };
    });
    e.preventDefault();
    console.log(this.state);
    this.confirmUser({ email, password });
    // getStudentMessages({ name: email.split("@")[0] });
  };
  render() {
    return (
      <div class="center ">
        <div className="card">
          <h1>Welcome To CYF Slack Dashboard</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
              className="form-item "
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />

            <input
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              className="form-item "
              placeholder="Password"
            />
            <button type="submit" className="form-submit">
              Login
            </button>
            {this.state.isLoading && (
              <div class="spinner-border text-danger mt-5" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
