import React, { Component } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:5000/api/auth/login";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      error2: "",
    };
  }

  changeHander1 = (e) => {
    this.setState({ email: e.target.value });
  };
  changeHander2 = (e) => {
    this.setState({ password: e.target.value });
  };
  handleSubmit = () => {
    console.log(this.state);
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("userdispla", data);
        sessionStorage.setItem("token", data.token);
        // sessionStorage.setItem('users',)

        this.props.history.push("/viewbooking");
      })
      .catch((err) => {
        this.setState({ error: "Invalid UserName and Password" });
      });
  };
  render() {
    console.log(this.props.location.search.split("=")[1]);

    return (
      <div>
        <div className="container">
          <div className="panel panel-primary">
            <h2 style={{ color: "green" }}>{this.state.error2}</h2>
            <div className="panel-heading">
              <h2>Login Page</h2>
            </div>
            <div style={{ color: "red" }}>{this.state.error}</div>
            <div className="panel-body">
              <div className="form-group">
                <label for="phone">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.email}
                  id="phone"
                  onChange={this.changeHander1}
                />
              </div>
              <label for="phone">Password:</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={this.state.password}
                onChange={this.changeHander2}
              />
            </div>

            <Link className="btn btn-success" onClick={this.handleSubmit}>
              Login Here
            </Link>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    if (this.props.location.search.split("=")[1]) {
      this.setState({ error2: this.props.location.search.split("=")[1] });
    }
  }
}

export default Login;
