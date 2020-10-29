import React from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import HotDeal from '../../components/utils/hot-deal/HotDeal';
import FeaturedDeal from '../../components/utils/featured-deal/FeaturedDeal';

//advertisement
import TopAd from '../../components/utils/advertisement/TopAd';
import BottomAd from '../../components/utils/advertisement/BottomAd';

import Layout from '../../components/Layout';

const Homepage = () => {
  return (
    <Layout>
      <Hidden smDown>
        <TopAd />
      </Hidden>
      <Grid item xs={12}>
        <HotDeal />
      </Grid>
      <Hidden only='xs'>
        <Grid item xs={12} style={{ margin: '15px 0' }} align='center'>
          <BottomAd />
        </Grid>
      </Hidden>
      <Grid item xs={12}>
        <FeaturedDeal />
      </Grid>
    </Layout>
  );
};

export default Homepage;
