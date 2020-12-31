import React, { Component } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:8393/BookingDetails";
class Booking extends Component {
  constructor() {
    super();
    this.state = {
      id: Math.floor(Math.random() * 100000),
      hotelName: sessionStorage.getItem("hotelname"),
      name: "",
      phone: "",
      status: "Pending",
      error: "",
      date: new Date().toISOString().slice(0, 10),
    };
  }
  changeHander = (e) => {
    this.setState({ name: e.target.value });
  };

  changeHander1 = (e) => {
    this.setState({ phone: e.target.value });
  };
  handleSubmit = () => {
    console.log(this.state);
    if (this.state.name.length > 4 && this.state.phone.length > 9) {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      }).then(this.props.history.push("/"));
    } else if (this.state.phone.length < 9 && this.state.name.length > 4) {
      this.setState({ error: "Please fill correct Phone number" });
    } else {
      this.setState({ error: "Please fill both details" });
    }
  };

  render() {
    console.log(this.state.date);
    return (
      <div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2>Booking for hotel {this.state.hotelName}</h2>
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label for="Hname">Hotel Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="Hname"
                  value={this.state.hotelName}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label for="id">Order Id:</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  value={this.state.id}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="control-label">Name:</label>
                <input
                  type="text"
                  value={this.state.name}
                  className="form-control"
                  onChange={this.changeHander}
                />
              </div>
              <div className="form-group">
                <label for="phone">Phone:</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  value={this.state.phone}
                  onChange={this.changeHander1}
                />
              </div>
              <div>
                <span style={{ color: "red" }}>{this.state.error}</span>
              </div>
              <Link to="/" className="btn btn-danger">
                Cancel
              </Link>{" "}
              &nbsp;
              <button className="btn btn-success" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;