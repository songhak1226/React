import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  /*
  로고를 클릭 => 메인창으로
  메인창을 클릭 => 메인창으로
  목록을 클릭 => ProductList
  */
  return (
    <div className='header-container'>
      <div className='link-container'>
        <Link to="/Main">로고</Link>
      </div>
      <div className='link-container'>
        <Link to="/Main">메인창 목록</Link>
      </div>
      <div className='link-container'>
      <Link to="/ProductList">로그인</Link>
      </div>
    </div>
  )
}

export default Header