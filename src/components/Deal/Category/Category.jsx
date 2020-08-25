import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryList from './CategoryList';
import { selectCollections } from '../../../redux/deals/deal.selectors';

const Category = ({ match, data }) => {
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

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(Category);
