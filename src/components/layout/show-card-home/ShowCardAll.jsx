import React from "react";
import ShowCard from "./ShowCard";
import Digital from "./sample1.svg";
import Fashion from "./sample2.svg";
import Shoes from "./sample3.svg";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";

const ShowCardAll = () => {
  return (
    <React.Fragment>
      <Grid item xs={6} sm={4} md={4} xl={3}>
        <ShowCard caption="digital" image={Digital} />
      </Grid>
      <Grid item xs={6} sm={4} md={4} xl={3}>
        {" "}
        <ShowCard caption="fashion" image={Fashion} />
      </Grid>
      <Hidden only="xs">
        {" "}
        <Grid item xs={6} sm={4} md={4} xl={3}>
          {" "}
          <ShowCard caption="shoes" image={Shoes} />
        </Grid>
      </Hidden>

      <Hidden lgDown>
        <Grid item xs={6} sm={4} md={4} xl={3}>
          {" "}
          <ShowCard caption="Electronics" image={Digital} />
        </Grid>
      </Hidden>
    </React.Fragment>
  );
};

export default ShowCardAll;
