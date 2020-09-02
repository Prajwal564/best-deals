import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import DrawerListItem from "./DrawerListItem";
// import { makeStyles } from "@material-ui/core/styles";

// deal json file
import deal from "../../../../data/deal.json";

// const useStyles = makeStyles((theme) => ({
//   active: {
//     backgroundColor: "red",
//   },
// }));

const DrawerList = () => {
  const [data, setData] = useState([]);

  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let offerDeal = deal.offers;
      setData(offerDeal);
    };
    fetchData();
  }, []);

  return (
    <>
      <List style={{ borderTop: "1px solid lightgray" }}>
        {data.map(({ category_label }) => (
          <>
            <Link
              to={`/category/${category_label}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <DrawerListItem
                category_label={category_label}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            </Link>
            <Divider />
          </>
        ))}
      </List>
    </>
  );
};

export default DrawerList;
