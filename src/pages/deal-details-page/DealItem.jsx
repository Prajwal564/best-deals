import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Grid from '@material-ui/core/Grid';
import DealItemDetail from './DealItemDetail';
import Layout from '../../components/Layout';
import { selectCollections } from '../../redux/deals/deal.selectors';
import Footer from '../../components/utils/Footer/Footer';

const DealItem = ({ match, data }) => {
  return (
    <>
      <Layout>
        <Grid item xs={12}>
          {data
            .filter(({ category_label }) => category_label === match.params.cid)
            .map(({ products }) =>
              products
                .filter((product) => product.id === match.params.did)
                .map(({ id, ...rest }) => <DealItemDetail key={id} {...rest} />)
            )}
        </Grid>
      </Layout>
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(DealItem);
