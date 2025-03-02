import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Exercise from './Exercise';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Exercise />
  </React.StrictMode>
);
