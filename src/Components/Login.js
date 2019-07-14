import React, { Component } from "react";
import logo from "../logo-cyf.png";

class Login extends Component {
  render() {
    return (
      // <form className="d-flex align-items-center justify-content-center ">

      <form action="" class="main-form">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <input
                  autoFocus
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  style={{ width: 300 }}
                />
              </div>
              <div class="row">
                <h5>CYF Student:</h5>
                <a style={{ color: "green" }}>Register Here</a>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <input
                  type="password"
                  class="form-control "
                  id="exampleInputPassword1"
                  placeholder="Password"
                  style={{ width: 300 }}
                />
              </div>
              <div class="row">
                <h5>Become a volunteer:</h5>
                <a style={{ color: "green" }}>Register Here</a>
              </div>
            </div>

            <div class="col">
              <div class="form-group" />
              <button
                type="submit"
                class="btn btn-success"
                style={{ width: 100 }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default Login;
