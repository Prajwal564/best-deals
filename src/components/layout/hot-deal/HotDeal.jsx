import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { selectCollections } from '../../../redux/deals/deal.selectors';

//sample card
import HotDealCard from './HotDealCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    marginTop: '10px',
    padding: '10px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
  },
  paper: {
    textAlign: 'center',
    justify: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#ffffff',
    height: '300px',
    border: '1px solid gray',
  },
  title: {
    display: 'flex',
    borderBottom: '1px solid gray',
    alignItems: 'center',
    paddingBottom: '10px',
  },
}));

const HotDeal = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.title}>
            <WhatshotIcon />
            <span>Hot Deal</span>
          </div>
        </Grid>
        {data.slice(0, 1).map((product) => (
          <HotDealCard
            products={product.products}
            category_label={product.category_label}
          />
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
});

export default connect(mapStateToProps)(HotDeal);
