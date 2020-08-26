import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header/Header';
import Deals from './pages/Deals/Deals';
import DealCategory from './pages/Deals/DealCategory';
import DealItem from './pages/deal-details-page/DealItem';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '140px' }}>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/deals' component={Deals} />
          <Route path='/category/:cid/deals/:did' component={DealItem} />
          <Route path='/category/:cid' component={DealCategory} />
        </Switch>
      </div>
    </>
  );
}

export default App;
