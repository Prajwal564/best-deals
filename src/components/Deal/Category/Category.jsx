import React, { useEffect, useState } from 'react';
import deal from '../../../data/deal.json';
import CategoryList from './CategoryList';

const Category = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      let offerItem = deal.offers;
      setData(offerItem);
    };
    fetchItem();
  }, []);

  return (
    <div>
      {data
        .filter(({ category_label }) => category_label === match.params.cid)
        .map(({ category_id, ...rest }) => (
          <CategoryList key={category_id} {...rest} />
        ))}
    </div>
  );
};

export default Category;
