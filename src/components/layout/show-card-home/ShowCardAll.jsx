import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShowCard from "./ShowCard";
import Digital from "./sample1.svg";
import Fashion from "./sample2.svg";
import Shoes from "./sample3.svg";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const ShowCardAll = () => {
  const classes = useStyles();
  return (
    <div className={classes.cards}>
      <ShowCard caption="digital" image={Digital} />
      <ShowCard caption="fashion" image={Fashion} />
      <ShowCard caption="shoes" image={Shoes} />
    </div>
  );
};

export default ShowCardAll;
