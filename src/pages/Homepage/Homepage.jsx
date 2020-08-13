import React from "react";

import "./Homepage.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ItemSlider from "../../components/layout/carousel/ItemSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "1rem 1rem",
    justifyContent: "space-between",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container sm={3}>
        <Grid item md={10}>
          <Paper className={classes.paper}>content</Paper>
        </Grid>
      </Grid>
      <Grid container sm={6} spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ height: "90px" }}>
            Advertisement
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ItemSlider />
        </Grid>
      </Grid>
      <Grid container sm={3} spacing={3} justify='space-around'>
        <Grid item xs={10}>
          <Paper className={classes.paper} style={{ height: "450px" }}>
            Advertisement
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper} style={{ height: "200px" }}>
            Advertisement
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
