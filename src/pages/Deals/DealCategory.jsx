import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Category from "../../components/Deal/Category/Category";
import Hidden from "@material-ui/core/Hidden";

//adverstisement
import TopAd from "../../components/layout/advertisement/TopAd";
import TopRightAd from "../../components/layout/advertisement/TopRightAd";
import BottomRightAd from "../../components/layout/advertisement/BottomRightAd";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "1rem 1rem",
    justifyContent: "space-between",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Deals = ({ match }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <Grid container lg={2}></Grid>
      </Hidden>
      <Grid container lg={7} md={9} xs={12} align="center" spacing={3}>
        <Hidden only="xs">
          <Grid item xs={12}>
            <TopAd />
          </Grid>
        </Hidden>

        <Grid item xs={12}>
          <Category match={match} />
        </Grid>
      </Grid>

      <Hidden smDown>
        <Grid
          container
          xs={12}
          md={3}
          lg={3}
          spacing={3}
          direction="column"
          align="center"
        >
          <Grid item>
            <TopRightAd />
          </Grid>
          <Grid item>
            <BottomRightAd />
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default Deals;
