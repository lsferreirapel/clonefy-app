import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import PlaylistPage from '../pages/PlaylistPage';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/playlist/:id" component={PlaylistPage}/>
  </Switch>
)

export default Routes;