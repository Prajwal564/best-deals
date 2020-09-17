import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectHistoryItems } from '../../redux/history/history.selector';

import Grid from '@material-ui/core/Grid';
import Layout from '../Layout';
import HistoryPageCard from './HistoryPageCard';

const HistoryPage = ({ HistoryItems }) => {
  return (
    <Layout>
      <Grid item xs={12}>
        {/* Content goes here */}
        {HistoryItems.length ? (
          HistoryItems.map((item) => (
            <HistoryPageCard key={item.id} item={item} />
          ))
        ) : (
          <h2>No History</h2>
        )}
      </Grid>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  HistoryItems: selectHistoryItems,
});

export default connect(mapStateToProps)(HistoryPage);
