import React from "react";
import "./sidebar.css";
import digital from "./digital.svg";
import fashion from "./fashion.svg";
import travel from "./travel.svg";
import sports from "./sports.svg";
import health from "./health.svg";
import food from "./food.svg";
import books from "./books.svg";
import more from "./more.svg";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div class="list">
        {" "}
        <img src={digital} alt="image" />
        <span>Digital & Electronics</span>
      </div>

      <div class="list">
        {" "}
        <img src={fashion} alt="image" />
        <span>Fasion & Accessories</span>
      </div>
      <div class="list">
        {" "}
        <img src={travel} alt="image" />
        <span>Travel & Vacation</span>
      </div>
      <div class="list">
        {" "}
        <img src={sports} alt="image" />
        <span>Sports & Entertainment</span>
      </div>

      <div class="list">
        {" "}
        <img src={health} alt="image" />
        Health & Beauty
      </div>
      <div class="list">
        {" "}
        <img src={food} alt="image" />
        <span>Food & Restaurant</span>
      </div>
      <div class="list">
        {" "}
        <img src={books} alt="image" />
        <span>Books & Stationary</span>
      </div>
      <div class="more">
        {" "}
        <img src={more} alt="image" />
        <span>See More</span>
      </div>
    </div>
  );
};

export default Sidebar;
