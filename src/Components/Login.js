import React, { Component } from "react";
import logo from "../logo-cyf.png";

class Login extends Component {
  state = { email: "", password: "" };
  handleClick = e => {
    const { email, password } = this.state;
    e.preventDefault();
    console.log(this.state);
    this.props.confirmUser({ email, password });
  };
  render() {
    return (
      <div class="container-fluid d-flex flex-column align-items-center justify-content-center ">
        <img src={logo} style={{ width: 300, marginBottom: 10 }} />

        <form className="container-fluid d-flex justify-content-center align-items-center mt">
          <div class="form-group mr-1">
            <input
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
              class="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mr-1">
            <input
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              class="form-control col-md-11"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group ">
            <button
              onClick={this.handleClick}
              type="submit"
              class="btn btn-success"
              style={{ width: 100 }}
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
