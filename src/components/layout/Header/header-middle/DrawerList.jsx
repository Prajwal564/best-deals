import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// deal json file
import deal from '../../../../data/deal.json';

const DrawerList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let offerDeal = deal.offers;
      setData(offerDeal);
    };
    fetchData();
  }, []);

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

export default DrawerList;
