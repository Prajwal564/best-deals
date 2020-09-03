import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/deals/deal.selectors';
import DealItemDetail from './DealItemDetail';

const DealItemPage = ({ match, data }) => {
  return (
    <div>
      {data
        .filter(({ category_label }) => category_label === match.params.cid)
        .map(({ products }) =>
          products
            .filter((product) => product.id === match.params.did)
            .map(({ id, ...rest }) => <DealItemDetail key={id} {...rest} />)
        )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(DealItemPage);
