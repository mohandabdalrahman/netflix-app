import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { GlobalStyle } from './global-styles'
import { firebase } from './lib/firebase'
import { FirebaseContext } from './context/firebase'
import 'normalize.css'
ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

