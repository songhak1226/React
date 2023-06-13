import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Headermain'>
      <div><Link to="/">로고(다운)</Link></div>
      <div className='HeaderBox'><Link to="/">메인페이지(다운)</Link></div>
      <div><Link to="/Community">커뮤니티(지희)</Link></div>
      <div><Link to="/storage">술창고([아카이브]다운)</Link></div>
      <div><Link to="/info">전통주정보(영현)</Link></div>
      <div><Link to="/login">로그인/회원가입(지훈)</Link></div>
    </div>
  );
};

export default Header;
