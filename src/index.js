import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import { DataLayer } from './data/DataLayer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reducer, { initialState } from './data/reducer';

// Pages import
import Home from './pages/Home/App';
import LoginPage from './pages/LoginPage';
import PlaylistPage from './pages/PlaylistPage';


ReactDOM.render(
  <BrowserRouter>
    <DataLayer initialState={initialState} reducer={reducer}>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/playlist/:id" component={PlaylistPage}/>
      </Switch>
    </DataLayer>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
