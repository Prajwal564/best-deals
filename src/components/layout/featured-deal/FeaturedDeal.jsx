import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import { selectCollections } from '../../../redux/deals/deal.selectors';

//json
import SampleFeaturedCard from './SampleFeaturedCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: '10px',
  },

  title: {
    display: 'flex',
    borderBottom: '1px solid gray',
    alignItems: 'center',
    paddingBottom: '10px',
  },
}));

const FeaturedDeal = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.title}>
            <FeaturedPlayListIcon />
            <span style={{ marginLeft: '5px' }}>Featured Deal</span>
          </div>
        </Grid>
        {data.slice(2, 3).map((item) => (
          <SampleFeaturedCard
            featuredProducts={item.products}
            category_label={item.category_label}
          />
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(FeaturedDeal);
