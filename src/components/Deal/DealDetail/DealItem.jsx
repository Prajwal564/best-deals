import React, { useState, useEffect } from "react";
import deal from "../../../data/deal.json";
import DealItemDetail from "./DealItemDetail";

const DealItem = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      let offerList = deal.offers;
      setData(offerList);
    };
    fetchItem();
  }, []);

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

export default DealItem;
