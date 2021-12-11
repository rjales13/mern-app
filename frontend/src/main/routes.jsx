import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  HashRouter,
  Switch,
} from "react-router-dom";

import Dashboard from "../dashboard/index";

export default (props) => (
  <Router history={HashRouter}>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
