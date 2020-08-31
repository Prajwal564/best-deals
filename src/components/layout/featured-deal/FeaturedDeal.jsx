import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";

//json
import data from "../../../data/deal.json";
import SampleFeaturedCard from "./SampleFeaturedCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    padding: "10px",
  },

  title: {
    display: "flex",
    borderBottom: "1px solid gray",
    alignItems: "center",
    paddingBottom: "10px",
  },
}));

const FeaturedDeal = () => {
  const classes = useStyles();
  const [offer, setDeal] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      let dealItem = data.offers;
      setDeal(dealItem);
    };
    fetchDeals();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.title}>
            <FeaturedPlayListIcon />
            <span style={{ marginLeft: "5px" }}>Featured Deal</span>
          </div>
        </Grid>
        {offer.slice(2, 3).map((item) => (
          <SampleFeaturedCard featuredProducts={item.products} />
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedDeal;
