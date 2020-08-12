import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Stationery from './containers/Stationery';
import Program from './containers/Program';
import Art from './containers/Art';
import Electronics from './containers/Electronics';
import Makeup from './containers/Makeup';
import Bags from './containers/Bags';
import Contact from './containers/Contact';
import { OfficeStationery } from './components/OfficeStationery';
import history from './history';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {<Redirect exact from='/' to='/dashboard' />}
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/stationery' component={Stationery} />
          <Route path='/program' component={Program} />
          <Route path='/art' component={Art} />
          <Route path='/electronics' component={Electronics} />
          <Route path='/makeup' component={Makeup} />
          <Route path='/bags' component={Bags} />
          <Route path='/shampoo' component={Contact} />
          <Route path='/office-stationery' component={OfficeStationery} />
        </Switch>
      </Router>
    );
  }
}
