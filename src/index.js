import 'babel-polyfill'; // there are some es6 features that babel can't transpile. somewhat weighty if you don't need this.
import React from 'react';
import { render } from 'react-dom'; //split off from react in react-4
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; //a higher order component that attaches our store to our components
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
// webpack can import and bundle these styles intelligently
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
