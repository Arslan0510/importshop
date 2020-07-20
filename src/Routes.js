import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import About from './containers/About';
import Program from './containers/Program';
import PhotoGallery from './containers/PhotoGallery';
import Family from './containers/Family';
import Contact from './containers/Contact';
import history from './history';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {<Redirect exact from='/' to='/dashboard' />}
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/about' component={About} />
          <Route path='/program' component={Program} />
          <Route path='/gallery' component={PhotoGallery} />
          <Route path='/family' component={Family} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    );
  }
}
