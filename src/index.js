import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './home';
import Clients from './clients';
import Products from './products';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/clients" component={Clients}></Route>
    <Route path="/products" component={Products}></Route>
  </Router>,
  document.getElementById('root')
);
