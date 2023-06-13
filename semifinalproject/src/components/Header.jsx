import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-container'>
          <div className='link-container'>
            <Link to="/">YYH</Link>
          </div>
          <div className='link-container'>
            <Link to="/list">목록</Link>
            {"  "}
            <Link to="/storage">저장소</Link>
          </div>
          <div className='link-container'>
          <Link to="/">로그인</Link>
          </div>
        </div>
      )
}

export default Header