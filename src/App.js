import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// pages
import Deals from './pages/Deals/Deals';
import DealCategory from './pages/Deals/DealCategory';
import DealItem from './pages/deal-details-page/DealItem';
import Homepage from './pages/Homepage/Homepage';

// components
import Header from './components/utils/Header/Header';
import Footer from './components/utils/Footer/Footer';
import HeartedPage from './components/Hearted/HeartedPage';
import HistoryPage from './components/History/HistoryPage';
import PageNotFound from './components/404';

// accounts
import Login from './components/accounts/Login';
import SignUp from './components/accounts/SignUp';
import Activate from './components/accounts/Activate';
import ResetPassword from './components/accounts/ResetPassword';
import ResetPasswordConfirm from './components/accounts/ResetPasswordConfirm';

import { fetchCollectionsStart } from './redux/deals/deal.actions';

const App = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/deals' component={Deals} />
      <Route exact path='/category/:cid/deals/:did' component={DealItem} />
      <Route exact path='/category/:cid' component={DealCategory} />
      <Route exact path='/history' component={HistoryPage} />
      <Route exact path='/hearted' component={HeartedPage} />

      {/* Accounts */}
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/reset-password' component={ResetPassword} />
      <Route
        exact
        path='/password/reset/confirm/:uid/:token'
        component={ResetPasswordConfirm}
      />
      <Route exact path='/activate/:uid/:token' component={Activate} />
      {/* ---- */}

      <Route path='*' component={PageNotFound} />
    </Switch>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(App);
