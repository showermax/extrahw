import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './ExtraHWRouting3103/App';
// import App from './mictoTasks0304/App';
// import App from './ExtraHW0504/App';
import App from './ExtraHW0704/App';
// import App from './ExtraHW/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
