import React, { Component } from "react";
import axios from "axios";
import Displaybooking from "./AdminDisplay";

const url = "http://localhost:8393/BookingDetails";
const hotelname = "https://developerfunnel.herokuapp.com/hotels?city=";
class Viewbooking extends Component {
  constructor() {
    super();
    this.state = {
      booking: "",
      Hname: "",
      seleHotel: "",
      filtered: "",
      date: "",
    };
  }
  renderHotelname = (data) => {
    if (data) {
      return data.map((item) => {
        return <option value={item.name}>{item.name}</option>;
      });
    }
  };
  HotelName = (e) => {
    console.log(e.target.value);
    this.setState({ seleHotel: e.target.value });

    const output = this.state.booking.filter((data) => {
      return data.hotelName === e.target.value;
    });
    this.setState({ filtered: output });
  };

  selectedDate = (e) => {
    console.log(e.target.value);
    this.setState({ date: e.target.value });

    const output = this.state.booking.filter((data) => {
      return data.date === e.target.value;
    });
    this.setState({ filtered: output });
  };

  render() {
    if (!sessionStorage.getItem("token")) {
      this.props.history.push("/login");
    }
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("_roll") !== "Admin"
    ) {
      this.props.history.push("/login?message=You Are Not Admin");
    }
    return (
      <div>
        <div className="container">
          <select onClick={this.HotelName}>
            <option>------Select Hotel------</option>
            {this.renderHotelname(this.state.Hname)}
          </select>
          <input
            type="date"
            onChange={this.selectedDate}
            value={this.state.date}
          ></input>
          <Displaybooking bookinglist={this.state.filtered} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios.get(url).then((res) => {
      this.setState({ booking: res.data, filtered: res.data });
    });

    axios.get(hotelname).then((res) => {
      this.setState({ Hname: res.data });
    });
  }
}

export default Viewbooking;
