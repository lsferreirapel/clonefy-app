import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { DataLayer } from './data/DataLayer';
import reducer, { initialState } from './data/reducer';

import GlobalStyle from './styles/Global';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <DataLayer initialState={initialState} reducer={reducer}>
      <Routes />
    </DataLayer>
    <GlobalStyle />
  </BrowserRouter>
)

export default App;