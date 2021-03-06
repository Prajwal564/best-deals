import React, { useState, useEffect } from 'react';

import deal from '../../data/deal.json';
import DealItemDetail from './DealItemDetail';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '1rem 1rem',
    justifyContent: 'space-between',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const DealItem = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      let offerList = deal.offers;
      setData(offerList);
    };
    fetchItem();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12} md={2} justify='space-around'>
        <Grid item md={10}></Grid>
      </Grid>
      <Grid container md={7} xs={12} spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{ height: '90px' }}>
            Advertisement
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {data
            .filter(({ category_label }) => category_label === match.params.cid)
            .map(({ products }) =>
              products
                .filter((product) => product.id === match.params.did)
                .map(({ id, ...rest }) => <DealItemDetail key={id} {...rest} />)
            )}
        </Grid>
      </Grid>
      <Grid container xs={12} md={3} spacing={3} justify='space-around'>
        <Grid item xs={10}>
          <Paper className={classes.paper} style={{ height: '600px' }}>
            Advertisement
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper} style={{ height: '250px' }}>
            Advertisement
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DealItem;
