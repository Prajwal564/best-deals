import React from 'react';

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import Category from '../../components/Deal/Category/Category';
import Footer from '../../components/utils/Footer/Footer';

const Deals = ({ match }) => {
  return (
    <>
      <Layout>
        <Grid item xs={12}>
          <Category match={match} />
        </Grid>
      </Layout>
      <Footer />
    </>
  );
};

export default Deals;
