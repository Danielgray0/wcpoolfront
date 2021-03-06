import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
      <Route component={NotFound} />
  </Switch>