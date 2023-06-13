import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Storage from './components/Storage';
import Info from './components/Info';
import Login from './components/Login';
import Community from './components/Community';
import Main from './components/Main.jsx';
const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <Routes>
        <Route path='/' element={<Main />} /> {/* 메인 컴포넌트를 루트 경로로 설정합니다. */}
        <Route path="/Community" element={<Community />} />
        <Route path="/Storage" element={<Storage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
