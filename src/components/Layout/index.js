import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

//advertisement
import TopRightAd from '../utils/advertisement/TopRightAd';
import BottomRightAd from '../utils/advertisement/BottomRightAd';
import Header from '../utils/Header/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '1rem 1rem',
    justifyContent: 'space-between',
    marginTop: '80px',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Hidden mdDown>
          <Grid item lg={2}></Grid>
        </Hidden>
        <Grid container lg={7} md={9} xs={12}>
          {children}
        </Grid>
        <Hidden smDown>
          <Grid container md={3} spacing={3} direction='column'>
            <Grid item align='center'>
              <TopRightAd />
            </Grid>
            <Grid item align='center'>
              <BottomRightAd />
            </Grid>
          </Grid>
        </Hidden>
      </div>
    </>
  );
};

export default Layout;
