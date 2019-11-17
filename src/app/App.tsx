import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Home, NotFound, Product } from 'pages';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/product/:id" component={Product} />
        <Route exact={true} path="/404" component={NotFound} />
        <Route exact={true} path="/" component={Home} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};
