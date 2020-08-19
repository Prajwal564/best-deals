import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Category from '../../components/Deal/Category/Category';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '1rem 1rem',
    justifyContent: 'space-between',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Deals = ({ match }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12} md={2}>
        <Grid item md={10}></Grid>
      </Grid>
      <Grid container md={7} xs={12} spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ height: '90px' }}>
            Advertisement
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Category match={match} />
        </Grid>
      </Grid>
      <Grid container xs={12} md={3} spacing={1} justify='space-around'>
        <Grid item xs={10}>
          <Paper className={classes.paper} style={{ height: '600px' }}>
            Advertisement
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper} style={{ height: '250px' }}>
            Advertisement
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Deals;
