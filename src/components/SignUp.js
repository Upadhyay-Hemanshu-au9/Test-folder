import React, { Component } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:5000/api/auth/register";
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  }

  changeHanderName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeHanderEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changeHanderPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = () => {
    if (
      this.state.name.length > 0 &
      this.state.email > 10 &
      this.state.password > 5
    ) {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });
      this.props.history.push("/login");
      localStorage.setItem("username", this.state.name);
    } else {
      this.setState({ error: "nOT vALid" });
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2>sIGN uP wItH uS</h2>
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label className="control-label">Name:</label>
                <input
                  type="text"
                  value={this.state.name}
                  className="form-control"
                  onChange={this.changeHanderName}
                />
              </div>
              <div className="form-group">
                <label for="phone">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  id="phone"
                  onChange={this.changeHanderEmail}
                />
              </div>
              <label for="phone">Password:</label>
              <input
                type="password"
                className="form-control"
                id="phone"
                value={this.state.password}
                onChange={this.changeHanderPassword}
              />
            </div>
            <div>
              <span style={{ color: "red", textAlign: "center" }}>
                {this.state.error}
              </span>
            </div>

            <Link
              className="btn btn-outline-success"
              onClick={this.handleSubmit}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
