import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import 'babel-polyfill';
import {
  createStore,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './Reducer';

//import Components/Views
import App from './App';

//create site history
let history = createHistory();

let baseEndpoint = 'http://192.168.129.250'

//import main reducer
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(baseEndpoint), routerMiddleware(history))));

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history} >
      <div>
        <Route exact path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);