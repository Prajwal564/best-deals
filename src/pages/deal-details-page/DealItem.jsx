import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Grid from '@material-ui/core/Grid';
import DealItemDetail from './DealItemDetail';
import Layout from '../../components/Layout';
import { selectCollections } from '../../redux/deals/deal.selectors';

const DealItem = ({ match, data }) => {
  return (
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
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(DealItem);
