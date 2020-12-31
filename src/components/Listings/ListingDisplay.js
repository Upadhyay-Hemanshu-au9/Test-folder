import React from "react";
import "./ListingApi.css";
import { Link } from "react-router-dom";

const listingDisplay = (props) => {
  console.log(props);

  const Hoteldetails = ({ listdata }) => {
    console.log(listdata);
    if (listdata.length > 0) {
      return listdata.map((item) => {
        return (
          <Link to={`/details/${item._id}`}>
            <div>
              <div>
                <img src={item.thumb} alt="" />
              </div>
              <div id="hotel-details">
                <h2>{item.name}</h2>
                <p>Adress:{item.address}</p>
                <p>
                  Room-type:{item.type[0].name},{item.type[1].name},
                  {item.type[2].name}
                </p>
                <p>Cost for night:{item.cost}</p>
              </div>
            </div>
          </Link>
        );
      });
    } else {
      return (
        <div id="notavail">
          <h2>No data found</h2>
        </div>
      );
    }
  };
  return (
    <div>
      <h1 id="head">Hotel Details</h1>
      {Hoteldetails(props)}
    </div>
  );
};

export default listingDisplay;
