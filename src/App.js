import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from './redux/deals/deal.actions';
import Header from './components/utils/Header/Header';
import Deals from './pages/Deals/Deals';
import DealCategory from './pages/Deals/DealCategory';
import DealItem from './pages/deal-details-page/DealItem';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/utils/Footer/Footer';
import HeartedPage from './components/Hearted/HeartedPage';
import HistoryPage from './components/History/HistoryPage';

const App = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <>
      <Header />
      <div style={{ marginTop: '80px' }}>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/deals' component={Deals} />
          <Route path='/category/:cid/deals/:did' component={DealItem} />
          <Route path='/category/:cid' component={DealCategory} />
          <Route path='/history' component={HistoryPage} />
          <Route path='/hearted' component={HeartedPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(App);
