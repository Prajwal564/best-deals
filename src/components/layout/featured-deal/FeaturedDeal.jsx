import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    marginTop: '2em',
    padding: '10px',
  },
  paper: {
    textAlign: 'center',
    justify: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#ffffff',
    flexGrow: '1',
    height: '300px',
    border: '1px solid gray',
  },
  title: {
    display: 'flex',
    borderBottom: '1px solid gray',
    alignItems: 'center',
    paddingBottom: '10px',
  },
}));

const FeaturedDeal = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.title}>
            <FeaturedPlayListIcon />
            <span style={{ marginLeft: '5px' }}>Featured Deal</span>
          </div>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>4</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>5</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>7</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>8</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeaturedDeal;
