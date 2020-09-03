import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from './redux/deals/deal.actions';
import Header from './components/layout/Header/Header';
import Deals from './pages/Deals/Deals';
import DealCategory from './pages/Deals/DealCategory';
import DealItem from './pages/deal-details-page/DealItem';
import Homepage from './pages/Homepage/Homepage';

const App = ({ fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <>
      <Header />
      <div style={{ marginTop: '80px' }}>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/deals' component={Deals} />
          <Route path='/category/:cid/deals/:did' component={DealItem} />
          <Route path='/category/:cid' component={DealCategory} />
        </Switch>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(App);
