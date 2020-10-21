import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import DrawerListItem from './DrawerListItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCollections,
  selectIsCollectionFetching,
} from '../../../../redux/deals/deal.selectors';

import CategoryListSkeleton from '../../../utils/skeletons/CategoryListSkeleton';

const DrawerList = ({ data, isLoading }) => {
  const [currentTab, setCurrentTab] = useState('');
  return (
    <List style={{ borderTop: '1px solid lightgray' }}>
      {isLoading ? (
        <CategoryListSkeleton />
      ) : (
        data.map(({ category_label }) => (
          <>
            <Link
              to={`/category/${category_label}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <DrawerListItem
                category_label={category_label}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            </Link>
            <Divider />
          </>
        ))
      )}
    </List>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
  isLoading: selectIsCollectionFetching,
});

export default connect(mapStateToProps)(DrawerList);
