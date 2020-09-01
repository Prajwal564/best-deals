import React from 'react';

import './Homepage.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import HotDeal from '../../components/layout/hot-deal/HotDeal';
import FeaturedDeal from '../../components/layout/featured-deal/FeaturedDeal';

//advertisement
import TopAd from '../../components/layout/advertisement/TopAd';
import BottomAd from '../../components/layout/advertisement/BottomAd';
import TopRightAd from '../../components/layout/advertisement/TopRightAd';
import BottomRightAd from '../../components/layout/advertisement/BottomRightAd';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '1rem 1rem',
    justifyContent: 'space-between',
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
        <Grid container item lg={2}></Grid>
      </Hidden>
      <Grid container item lg={7} md={9} xs={12} align='center' spacing={1}>
        <Hidden only='xs'>
          <Grid item xs={12}>
            <TopAd />
          </Grid>
        </Hidden>

        <Grid item xs={12}>
          <HotDeal />
        </Grid>
        <Hidden only='xs'>
          <Grid item xs={12} style={{ margin: '15px 0' }}>
            <BottomAd />
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          <FeaturedDeal />
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid
          container
          item
          xs={12}
          md={3}
          lg={3}
          spacing={3}
          direction='column'
          align='center'
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

export default Homepage;
