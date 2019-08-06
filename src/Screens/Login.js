import React, { Component } from "react";
import { getStudentMessages } from "../Components/actions/getStudentMessages";
import { login } from "../Components/actions/login";
import swal from "sweetalert";
import { setToken, getUserType, getProfile, loggedIn } from "../Auth/index";
import "./login.css";
import { Link } from "react-router-dom";
import NavForScreens from "./NavForScreens";
class Login extends Component {
  state = { email: "", password: "", isLoading: false, userData: {} };
  confirmUser = async user => {
    try {
      const response = await login(user);
      console.log("login response ", response);
      const profile = getProfile();
      if (response) {
        await setToken(response.data.token);
        this.setState(prevState => {
          return {
            isLoading: !prevState.isLoading,
            userData: profile
          };
        });
        if (getUserType() === "Mentor") {
          return this.props.history.push("/mentor", { ...profile });
        }
        if (getUserType() === "Admin") {
          return this.props.history.push("/admin", { ...profile });
        }
        if (getUserType() === "Student") {
          return this.props.history.push("/sudentpage", {
            ...profile
          });
        }
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
    // if (loggedIn()) {
    //   return (
    //     <div class="center ">
    //       <div className="card">
    //         <h1>Welcome To CYF Slack Dashboard</h1>
    //       </div>
    //     </div>
    //   );
    // }
    return (
      <div>
        <NavForScreens />
        <div class="center ">
          <div className="card">
            <div style={{ fontSize: 30, textAlign: "center" }}>
              Welcome To CYF Slack Dashboard
            </div>
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
              {!this.state.isLoading && (
                <div>
                  Don't have an account?{" "}
                  <Link to="/register">
                    <a className="text-danger" style={{ fontWeight: "bold" }}>
                      Register
                    </a>
                  </Link>
                </div>
              )}
              {this.state.isLoading && (
                <div class="spinner-border text-danger mt-5" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
