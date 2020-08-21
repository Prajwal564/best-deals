import React from "react";

import "./Homepage.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ItemSlider from "../../components/layout/carousel/ItemSlider";
import HotDeal from "../../components/layout/hot-deal/HotDeal";
import FeaturedDeal from "../../components/layout/featured-deal/FeaturedDeal";
import ShowCardAll from "../../components/layout/show-card-home/ShowCardAll";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "1rem 1rem",
    justifyContent: "space-between",
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sidebarStyle: {
    marginTop: "-1.2%",
    marginLeft: "-1.2%",
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12} md={2} justify="space-around">
        <Grid item md={10}></Grid>
      </Grid>
      <Grid container md={7} xs={12} spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ height: "90px" }}>
            Advertisement
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ItemSlider />
        </Grid>

        <Grid item xs={12} style={{ marginTop: "18px" }}>
          <ShowCardAll />
        </Grid>

        <Grid item xs={12}>
          <HotDeal />
        </Grid>
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{ height: "90px", marginTop: "2em" }}
          >
            Advertisement
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <FeaturedDeal />
        </Grid>
      </Grid>
      <Grid container xs={12} md={3} spacing={3} justify="space-around">
        <Grid item xs={10}>
          <Paper className={classes.paper} style={{ height: "600px" }}>
            Advertisement
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper} style={{ height: "250px" }}>
            Advertisement
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
