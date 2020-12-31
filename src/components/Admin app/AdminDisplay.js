import React, { Component } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:8393/BookingDetails";
class Displaybooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }

  AcceptDetail = (e) => {
    fetch(`${url}/${e.target.value}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "ACCEPTED",
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  rejectItem = (e) => {
    console.log(e.target.value);
    fetch(`${url}/${e.target.value}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "REJECTED",
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

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
                {/* <td>{item.status}</td> */}

                <td>
                  <button
                    className="btn btn-success"
                    value={item.id}
                    onClick={this.AcceptDetail}
                  >
                    Accept
                  </button>
                  <button
                    value={item.id}
                    onClick={this.rejectItem}
                    className="btn btn-danger"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          );
        });
      } else {
        return <h3 style={{ color: "red" }}>"Hotel is not booked"</h3>;
      }
    }
  };

  Logoutfun = () => {
    sessionStorage.clear();
  };
  render() {
    // console.log('fil',this.state.filtered)
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
                {/* <th>Status</th> */}
                <th>Checking</th>
              </tr>
            </thead>

            {/* {this.filterhotel(this.props.bookinglistbyname)} */}
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
