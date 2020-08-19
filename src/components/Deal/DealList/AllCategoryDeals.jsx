import React, { useEffect, useState } from 'react';

import deal from '../../../data/deal.json';
import DealList from './DealList';

const AllCategoryDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let offerDeal = deal.offers;
      setData(offerDeal);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map(({ category_id, ...otherProps }) => (
        <DealList key={category_id} {...otherProps} />
      ))}
    </div>
  );
};

export default AllCategoryDeals;
