import React from 'react';
import { Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';

import AllCategoryDeals from '../../components/Deal/DealList/AllCategoryDeals';

const Deals = ({ match }) => {
  return (
    <Layout>
      <Grid item xs={12}>
        <Route exact path={`${match.path}`} component={AllCategoryDeals} />
      </Grid>
    </Layout>
  );
};

export default Deals;
