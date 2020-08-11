import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Deals from "./components/Deal/DealList/Deals";
import DealItem from "./components/Deal/DealDetail/DealItem";
import Category from "./components/Deal/Category/Category";
import ItemSlider from "./components/layout/carousel/ItemSlider";

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <ItemSlider />
        <Switch>
          <Route exact path='/' component={Deals} />
          <Route path='/category/:cid/deals/:did' component={DealItem} />
          <Route path='/category/:cid' component={Category} />
          <Redirect from='/' to='/deals' />
        </Switch>
      </div>
    </>
  );
}

export default App;
