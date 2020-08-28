import React, { useState, useEffect } from 'react';

import deal from '../../data/deal.json';
import DealItemDetail from './DealItemDetail';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

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
      <Hidden mdDown>
        <Grid container lg={2}></Grid>
      </Hidden>
      <Grid container md={9} xs={12} lg={7} spacing={3}>
        <Hidden only='xs'>
          <Grid item xs={12} align='center'>
            <Paper
              className={classes.paper}
              style={{ height: '89px', width: '729px' }}
            >
              Advertisement
            </Paper>
          </Grid>
        </Hidden>
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
      <Hidden smDown>
        <Grid
          container
          xs={12}
          md={3}
          lg={3}
          spacing={3}
          direction='column'
          align='center'
        >
          <Grid item>
            <Paper
              className={classes.paper}
              style={{ height: '600px', width: '300px' }}
            >
              Advertisement
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              className={classes.paper}
              style={{ width: '300px', height: '250px' }}
            >
              Advertisement
            </Paper>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default DealItem;
