import React from 'react';
import moment from 'moment';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, IconButton } from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';

//icon
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em',
  },
  crossedLine: {
    textDecoration: 'line-through',
    color: 'red',
  },
  info: {
    margin: '2em 0',
    display: 'flex',
    flexDirection: 'column',
  },
  seedeal: {
    borderRadius: '20px',
    backgroundColor: 'green',
    color: 'white',
    width: '150px',
    marginRight: theme.spacing(2),
  },
  button: {
    display: 'flex',
    marginTop: '2em',
  },
  desc: {
    margin: '2vh 0',
  },
  image: {
    margin: '1vh 2vw',
    border: '1px solid black',
    width: '80%',
    height: 'auto',
    padding: '2em',
    overflow: 'none',
  },
  dealEndMsg: {
    color: 'red',
    marginTop: '2em',
  },
  dealMsg: {
    marginTop: '1vh',
    marginBottom: '1vh',
    color: 'green',
  },
  socialIcon: {
    display: 'flex',
    maxWidth: '150px',
    justifyContent: 'space-evenly',
    alignContent: 'flex-start',
  },
  ribbon: {
    backgroundColor: '#FF3D00',
    position: 'absolute',
    color: 'white',
    width: 40,
    zIndex: 3,
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: 5,
    font: 'Lato',
    top: 315,
    marginLeft: -17,
  },
}));

const DealItemDetail = (i) => {
  const classes = useStyles();

  const DealEndedMsg = () => {
    return (
      <Typography variant='body1' className={classes.dealEndMsg}>
        <b style={{ color: 'black' }}>Availability: </b>This offer has expired.
      </Typography>
    );
  };

  const DealNotEndedMsg = () => {
    return (
      <Typography variant='body1' className={classes.dealMsg}>
        <b style={{ color: 'black' }}>Availability: </b>Deals ends{' '}
        {moment(`${i.endDate}`, 'YYYY-MM-DD, hh:mm:ss').fromNow()}
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
      <Grid container justify='center'>
        <Grid item xs={10} align='center'>
          <div className={classes.image}>
            <div className={classes.ribbon}>-{i.offerPercent}%</div>
            <img
              src={i.imageUrl}
              alt={i.title}
              width='60%'
              height='auto'
              object-fit='cover'
            />
          </div>
        </Grid>
        <Grid item xs={12} className={classes.info}>
          <Typography variant='h5' style={{ marginBottom: '1em' }}>
            {i.title}
          </Typography>
          <Rating
            name='read-only'
            value={i.reviewRating}
            readOnly
            size='small'
            style={{ paddingBottom: '1em', borderBottom: '1px solid gray' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' style={{ marginBottom: '1em' }}>
            Offer valid till: {i.endDate}
          </Typography>

          {dealNotEnded}

          <Typography variant='body1' style={{ marginTop: '1em' }}>
            <b>Original Price: </b>
            <span className={classes.crossedLine}>${i.normalPrice}</span>
          </Typography>
          <Typography variant='body1'>
            <b>Offer Price: </b> ${i.offerPrice}
          </Typography>
          <Typography variant='body1'>
            <b>You save: </b> ${(i.normalPrice - i.offerPrice).toFixed(2)} (
            {i.offerPercent}%)
          </Typography>

          <Typography variant='body1' className={classes.desc}>
            <b>Analysis:</b> <br />
            {i.description}.
          </Typography>

          <Typography variant='body1' style={{ marginTop: '1em' }}>
            A total of {i.totalReviews} users have reviewed this product.
          </Typography>

          {dealEnded}
        </Grid>

        <Grid item xs={12} className={classes.button}>
          <Button
            href={i.url}
            target='blank'
            color='primary'
            variant='contained'
            size='medium'
            className={classes.seedeal}
          >
            See Deal
          </Button>
          <Fab
            aria-label='like'
            size='small'
            style={{
              color: 'green',
              backgroundColor: 'white',
              border: '1px solid green',
            }}
          >
            <FavoriteIcon />
          </Fab>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.socialIcon}
          style={{ marginRight: 'auto', marginTop: '1em' }}
        >
          <IconButton>
            <FacebookIcon color='primary' />
          </IconButton>
          <IconButton>
            <TwitterIcon style={{ fill: '#1DA1F2' }} />
          </IconButton>
          <IconButton>
            <InstagramIcon color='secondary' />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DealItemDetail;
