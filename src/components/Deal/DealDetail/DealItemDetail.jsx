import React from "react";
import moment from "moment";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 10px",
  },
  crossedLine: {
    textDecoration: "line-through",
    color: "red",
  },
  info: {
    marginTop: "5vh",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    width: "200px",
    marginTop: "5vh",
  },
  desc: {
    margin: "2vh 0",
  },
  img: {
    margin: "5px 5px",
    objectFit: "cover",
    justifyContent: "center",
  },
  offerDate: {
    marginTop: "2vh",
  },
  dealEndMsg: {
    color: "red",
    marginTop: "3vh",
  },
  dealMsg: {
    marginTop: "1vh",
  },
}));

const DealItemDetail = (i) => {
  const classes = useStyles();

  const DealEndedMsg = () => {
    return (
      <Typography variant='body1' className={classes.dealEndMsg}>
        This offer has expired.
      </Typography>
    );
  };

  const DealNotEndedMsg = () => {
    return (
      <Typography variant='body1' className={classes.dealMsg}>
        Deals ends {moment(`${i.endDate}`, "YYYY-MM-DD, hh:mm:ss").fromNow()}
      </Typography>
    );
  };

  var remainingTime = moment(i.endDate).diff(moment());

  if (remainingTime < 0) {
    var dealEnded = <DealEndedMsg />;
  } else {
    var dealNotEnded = <DealNotEndedMsg />;
  }

  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h5'>{i.title}</Typography>
          <Typography variant='body2' className={classes.offerDate}>
            Offer valid till: {i.endDate}
          </Typography>

          {dealNotEnded}
        </Grid>
        <Grid item xs={12} md={6} className={classes.info}>
          <Typography variant='body1'>
            Original Price:{" "}
            <span className={classes.crossedLine}>${i.normalPrice}</span>
          </Typography>
          <Typography variant='body1'>Offer Price: ${i.offerPrice}</Typography>
          <Typography variant='body1'>
            You save: ${(i.normalPrice - i.offerPrice).toFixed(2)} (
            {i.offerPercent}%)
          </Typography>
          <Typography variant='body1' className={classes.desc}>
            Description: {i.description}
          </Typography>
          <Typography variant='body2'>
            Total Review: {i.totalReviews} users
          </Typography>
          <Rating
            name='read-only'
            value={i.reviewRating}
            readOnly
            size='medium'
          />
          <Button
            href={i.url}
            target='blank'
            variant='outlined'
            size='medium'
            color='primary'
            className={classes.button}
          >
            See Deal
          </Button>
          {dealEnded}
        </Grid>
        <Grid item xs={12} md={5} className={classes.img}>
          <img src={i.imageUrl} alt={i.title} width='70%' height='auto' />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DealItemDetail;
