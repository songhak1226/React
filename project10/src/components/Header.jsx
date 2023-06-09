import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/?type=dress">원피스</Link>{"  "}
      <Link to="/">전체</Link>
    </div>
  )
}

export default Header