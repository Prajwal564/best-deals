import React from "react";
import "./show-card.css";

export default function ShowCard(props) {
  const { image, caption } = props;
  return (
    <div className="show-card">
      <div className="image">
        <img src={image} alt="img" />
      </div>

      <div className="caption">{caption}</div>
    </div>
  );
}
