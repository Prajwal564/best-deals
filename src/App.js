import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Deals from "./components/Deal/DealList/Deals";
import DealItem from "./pages/deal-details-page/DealItem";
import Category from "./components/Deal/Category/Category";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/deals' component={Deals} />
        <Route path='/category/:cid/deals/:did' component={DealItem} />
        <Route path='/category/:cid' component={Category} />
      </Switch>
    </>
  );
}

export default App;
