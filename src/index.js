import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// this const below takes all of our code and injects it (bycreating the "root" element) into the index.html file in our public folder.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
