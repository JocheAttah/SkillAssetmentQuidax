import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SiteHeaderContainer } from "./containers/siteHeader";
import { Home, SearchDetails } from "./pages";

export default function Routes() {
  return (
    <Router>
      <SiteHeaderContainer />
      <Switch>
        <Route>
          <Home exact path="/" />
        </Route>

        <Route>
          <SearchDetails path="/details/:id" />
        </Route>
      </Switch>
    </Router>
  );
}
