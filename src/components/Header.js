import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      token: sessionStorage.getItem("token"),
      name: localStorage.getItem("username"),
    };
  }
  Logoutfun = () => {
    sessionStorage.clear();
  };
  renderValue = () => {
    if (!sessionStorage.getItem("token")) {
      return (
        <>
          <li>
            <Link to="/register">
              <span className="glyphicon glyphicon-user"></span>Signup
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link>
              <span className="glyphicon glyphicon-user"></span>Welcome{" "}
              {localStorage.getItem("username")}
            </Link>
          </li>
          <li>
            <Link
              className="glyphicon glyphicon-log-out"
              onClick={this.Logoutfun}
            >
              {" "}
              Logout
            </Link>
          </li>
        </>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <nav
          className="navbar navbar-inverse"
          style={{ background: "teal", color: "#fff" }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand">Developer Funnel</Link>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/viewbooking">Booking List</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/admin">Admin Dashboard</Link>
              </li>
              {this.renderValue()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
