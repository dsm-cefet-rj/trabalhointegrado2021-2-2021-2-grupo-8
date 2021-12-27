import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import {Provider} from 'react-redux'
ReactDOM.render(
  // <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </Provider>
  ,
  document.getElementById('root')
);
