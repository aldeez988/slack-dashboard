import React, { Component } from "react";
import logo from "../logo-cyf.png";

class Login extends Component {
  state = { user: "", password: "" };
  handleClick = e => {
    const { user, password } = this.state;
    e.preventDefault();
    console.log(this.state);
    this.props.confirmUser({ user, password });
  };
  render() {
    return (
      <div class="container" style={{ width: 800 }}>
        <form className="d-flex align-items-center justify-content-center ">
          <div class="form-group">
            <input
              onChange={e => this.setState({ user: e.target.value })}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <input
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <button
              onClick={this.handleClick}
              type="submit"
              class="btn btn-success"
              style={{ width: 100, padding: 5 }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
