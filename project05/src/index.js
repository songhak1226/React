import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. 양방향 데이터 전달
// import App from './Ex01';

// 2. Context API (userContext)
// import App from './Ex02';

// 3. Context 실습 - 다크모드 만들기
import App from './Ex03';

// 4. Mini Project - Todo List 만들기
// import App from './Ex04';

// 5. useRef 예제 - 도형 크기 변경시키기
// import App from './Ex05';

// 6. useRef 실습 - pdf 변경시키기
// import App from './Ex06';

// 7. useRef 실습 - 사진 변경 & focus
// import App from './Ex07';


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
