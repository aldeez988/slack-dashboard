import React, { Component } from "react";

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
        <form className="container-fluid d-flex justify-content-center align-items-center mt">
          <div className="container">
            <div className="row justify-content-center">
              <div class="col-12 col-lg-4 col-md-4 form-group ">
                <input
                  onChange={e => this.setState({ email: e.target.value })}
                  type="email"
                  class="form-control "
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <div class="col-12 col-lg-4 col-md-4 form-group ">
                <input
                  onChange={e => this.setState({ password: e.target.value })}
                  type="password"
                  class="form-control col-md-11"
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
