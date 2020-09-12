import Top from "./ad-images/top.svg";

import React from "react";

const TopAd = () => {
  return (
    <div>
      <img
        src={Top}
        style={{ width: "728px", height: "90px" }}
        alt="Advertisement"
      ></img>
    </div>
  );
};

export default TopAd;
