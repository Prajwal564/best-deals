import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WhatshotIcon from '@material-ui/icons/Whatshot';

//json data
import data from '../../../data/deal.json';

//sample card
import HotDealCard from './HotDealCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    marginTop: '2em',
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

const HotDeal = () => {
  const classes = useStyles();
  const [deal, setDeal] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      let dealItem = data.offers;
      setDeal(dealItem);
    };
    fetchDeals();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.title}>
            <WhatshotIcon />
            <span>Hot Deal</span>
          </div>
        </Grid>
        {deal.slice(0, 1).map((product) => (
          <HotDealCard
            products={product.products}
            category_label={product.category_label}
          />
        ))}
      </Grid>
    </div>
  );
};

export default HotDeal;
