//entry point for react is here
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//app is the root component! so <App/> on line 12 is grabbing the App component
//which is imported on line 5

ReactDOM.render( //grabs root div and insert the react app into that div
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
