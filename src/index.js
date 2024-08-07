// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { AppProvider } from './components/AppContext';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
