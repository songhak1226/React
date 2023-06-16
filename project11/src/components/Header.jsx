import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Headermain'>
      <div><Link to="/">로고</Link></div>
      <div><Link to="/Community">커뮤니티</Link></div>
      <div><Link to="/storage">술창고</Link></div>
      <div><Link to="/info">전통주정보</Link></div>
      <div><Link to="/login">로그인</Link></div>
    </div>
  );
};

export default Header;
