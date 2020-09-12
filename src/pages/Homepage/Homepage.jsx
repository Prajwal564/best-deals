import React from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import HotDeal from '../../components/utils/hot-deal/HotDeal';
import FeaturedDeal from '../../components/utils/featured-deal/FeaturedDeal';

//advertisement
import BottomAd from '../../components/utils/advertisement/BottomAd';

import Layout from '../../components/Layout';

const Homepage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Homepage;
