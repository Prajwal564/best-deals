import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DealList from './DealList';
import { selectCollections } from '../../../redux/deals/deal.selectors';

const AllCategoryDeals = ({ data }) => {
  return (
    <div>
      {data.map(({ category_id, ...otherProps }) => (
        <DealList key={category_id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(AllCategoryDeals);
