import React from 'react';

import Grid from '@material-ui/core/Grid';
import Top from './ad-images/top.svg';

const TopAd = () => {
  return (
    <Grid item sm={12} align='center'>
      <img src={Top} width='728px' height='90px' alt='Advertisement' />
    </Grid>
  );
};

export default TopAd;
