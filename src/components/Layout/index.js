import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

//advertisement
import TopAd from '../utils/advertisement/TopAd';
import TopRightAd from '../utils/advertisement/TopRightAd';
import BottomRightAd from '../utils/advertisement/BottomRightAd';

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

const Layout = ({ children }) => {
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
        {children}
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

export default Layout;
