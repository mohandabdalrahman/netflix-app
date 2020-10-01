import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './global-styles'
import 'normalize.css'
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

