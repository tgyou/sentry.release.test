import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { init } from '@sentry/browser';


const dsn = 'https://753f8ee311114ea88a97cdf61cb57774@sentry.styx.im/2';
const release = '0.0.1';
const environment = process.env.NODE_ENV;
const exclude_paths = [ 'sockjs-node' ];
const options = { dsn, environment, exclude_paths };

if (process.env.NODE_ENV === 'production') {
  init({ ...options, release });
} else {
  init({ ...options, debug: true });
}

ReactDOM.render(
  <App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: http://bit.ly/CRA-PWA