import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DealList from './DealList';
import {
  selectCollections,
  selectIsCollectionFetching,
} from '../../../redux/deals/deal.selectors';

import AllDealSkeleton from '../../utils/skeletons/AllDealSkeleton';

const AllCategoryDeals = ({ data, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <AllDealSkeleton />
      ) : (
        data.map(({ category_id, ...otherProps }) => (
          <DealList key={category_id} {...otherProps} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
  isLoading: selectIsCollectionFetching,
});

export default connect(mapStateToProps)(AllCategoryDeals);
