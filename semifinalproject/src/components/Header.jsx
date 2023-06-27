import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  // 아코디언 & 다크모드
  const [isStorageOpen, setStorageOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleStorageHover = () => {
    setStorageOpen(true);
  };

  const handleStorageLeave = () => {
    setStorageOpen(false);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add('dark-mode');
    } else {
      rootElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // 로그인 확인
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('http://localhost:8099/soolsool/checkLoginStatus', { withCredentials: true });
      if (response.data.loggedIn) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8099/soolsool/logout', {}, { withCredentials: true });
      setIsLoggedIn(false);
      // 홈으로 이동
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="header-main">
      <div className="logo">
        <Link to="/">홈</Link>
      </div>

      <div
        className={`menu-item ${isStorageOpen ? 'storage-open' : ''}`}
        onMouseEnter={handleStorageHover}
        onMouseLeave={handleStorageLeave}
      >
        <div className="menu-title">술창고</div>
        {isStorageOpen && (
          <div className="menu-content">
            <Link to="/Archive">모두의 술창고</Link>
            {isLoggedIn && <Link to="/MyArchive">내 술창고</Link>}
          </div>
        )}
      </div>
      <div className="menu-item">
        <Link to="/community">커뮤니티</Link>
      </div>
      <div className="menu-item">
        <Link to="/info">전통주정보</Link>
      </div>
      <div className="menu-item">
        {isLoggedIn ? (
          <>
            <Link to="/MyPage">마이페이지</Link>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>

      {/* 다크모드 & 로그인 버튼 */}
      <div className="dark-mode-toggle">
        <button onClick={handleDarkModeToggle}>{isDarkMode ? <button className="Lightmode">라이트 모드</button> : '다크 모드'}</button>
        <div className="Log">
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout} className="Logout">
                로그아웃
              </button>
            </>
          ) : (
            <button className="Login">
              <Link to="/login">로그인</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;