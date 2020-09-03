import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import DrawerListItem from './DrawerListItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../../../redux/deals/deal.selectors';

const DrawerList = ({ data }) => {
  const [currentTab, setCurrentTab] = useState('');
  return (
    <>
      <List style={{ borderTop: '1px solid lightgray' }}>
        {data.map(({ category_label }) => (
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
        ))}
      </List>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(DrawerList);
