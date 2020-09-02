import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../../../redux/deals/deal.selectors';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const DrawerList = ({ data }) => {
  return (
    <List style={{ borderTop: '1px solid lightgray' }}>
      {data.map(({ category_label, category_id }) => (
        <>
          <Link
            to={`/category/${category_label}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ListItem button>
              <ListItemText>{category_label}</ListItemText>
            </ListItem>
          </Link>
          <Divider />
        </>
      ))}
    </List>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(DrawerList);
