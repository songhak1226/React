import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. 지도 띄워주기 (기본)
// import App from './App';

// 2. 지도 예제
import App from './App2';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
