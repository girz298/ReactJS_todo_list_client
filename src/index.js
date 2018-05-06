import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './containers/Table/table.jsx'
import CreateProjectBlock from './containers/CreateProjectBlock/createProjectBlock.jsx'
import RefreshProjectsBlock from './containers/RefreshProjectsBlock/refreshProjectsBlock.jsx'

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CreateProjectBlock />
      <RefreshProjectsBlock />
      <Table />
    </div>
  </Provider>,
  document.getElementById('root')
);
