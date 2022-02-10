import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.scss'

var ready = function () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

(ready)();
