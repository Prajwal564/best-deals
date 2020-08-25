import React from 'react';

import DealItemPage from './DealItemPage';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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

const DealItem = ({ match }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12} md={2} justify='space-around'>
        <Grid item md={10}></Grid>
      </Grid>
      <Grid container md={7} xs={12} spacing={3}>
        <Grid item xs={12} align='center'>
          <Paper
            className={classes.paper}
            style={{ height: '89px', width: '729px' }}
          >
            Advertisement
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <DealItemPage match={match} />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        md={3}
        spacing={3}
        direction='column'
        align='center'
      >
        <Grid item>
          <Paper
            className={classes.paper}
            style={{ height: '600px', width: '300px' }}
          >
            Advertisement
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            className={classes.paper}
            style={{ width: '300px', height: '250px' }}
          >
            Advertisement
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DealItem;
