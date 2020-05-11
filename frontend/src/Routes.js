import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import ProductDetail from "./pages/Product/Detail";
import NewProduct from "./pages/Product/New";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/product/:id(\d+)" component={ProductDetail} />
        <Route exact path="/product/new" component={NewProduct} />
      </Switch>
    </BrowserRouter>
  );
}
