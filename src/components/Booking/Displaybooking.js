import React, { Component } from "react";
import { Link } from "react-router-dom";

class Displaybooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }

  bookingDisplay = () => {
    if (this.props.bookinglist) {
      if (this.props.bookinglist.length > 0) {
        return this.props.bookinglist.map((item) => {
          return (
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.hotelName}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
            </tbody>
          );
        });
      } else {
        return (
          <h2 style={{ color: "red", textAlign: "center" }}>
            <b>"No Hotel Booked By user In selected Criteria"</b>
          </h2>
        );
      }
    }
  };

  Logoutfun = () => {
    sessionStorage.clear();
  };
  render() {
    return (
      <div>
        <div className="container">
          <center>
            <h3>Bookings</h3>
          </center>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Hotel Name</th>
                <th>Booking Date</th>
                <th>Status</th>
              </tr>
            </thead>
            {this.bookingDisplay()}
          </table>
          <Link className="btn btn-danger" onClick={this.Logoutfun}>
            Log out
          </Link>
        </div>
      </div>
    );
  }
}

export default Displaybooking;
