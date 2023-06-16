import React from 'react';
import './css//App.css';
import './css/writing.css'
import './css/Login.css'
import './css/Storage.css'
import './css/Main.css'
import './css/Header.css'
import './css/Info.css'
import './css/Community.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Storage from './components/Storage';
import Info from './components/Info';
import Login from './components/Login';
import Writing from './components/writing';
import Community from './components/Community';
import Main from './components/Main.jsx';
import Join from './components/Join';
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
        <Route path="/Join" element={<Join />} />
        <Route path="/Writing" element={<Writing />} />
      </Routes>
      
    </div>
  );
};

export default App;
