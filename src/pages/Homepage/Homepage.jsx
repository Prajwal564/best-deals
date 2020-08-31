import React from 'react';

import './Homepage.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

import HotDeal from '../../components/layout/hot-deal/HotDeal';
import FeaturedDeal from '../../components/layout/featured-deal/FeaturedDeal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '1rem 1rem',
    justifyContent: 'space-between',
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  sidebarStyle: {
    marginTop: '-1.2%',
    marginLeft: '-1.2%',
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <Grid container lg={2}></Grid>
      </Hidden>
      <Grid container lg={7} md={9} xs={12} align='center' spacing={1}>
        <Hidden only='xs'>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              style={{ height: '89px', width: '729px' }}
            >
              Advertisement
            </Paper>
          </Grid>
        </Hidden>

        <Grid item xs={12}>
          <HotDeal />
        </Grid>
        <Hidden only='xs'>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              style={{ height: '89px', width: '729px' }}
            >
              Advertisement
            </Paper>
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          <FeaturedDeal />
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid
          container
          xs={12}
          md={3}
          lg={3}
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
      </Hidden>
    </div>
  );
};

export default Homepage;
