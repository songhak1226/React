import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
  /*
    Link 태그
    - 하이버텍스트를 생성할 때는 보통 a 태그를 사용한다.
    - 하지만, a태그는 클릭 시 페이지를 새로 불러오기 때문에 react의 SPA 성격에 맞지 않는다.
    - 따라서 Link태그를 사용한다!
    - History API를 통해 브라우저 주소의 경로만 바꾸는 기능

    (1) import {Link} from 'react-router-dom'
    (2) <Link to="경로">링크명</Link>
  */
  return (
    <div>Main Page
      <hr/>
      <Link to="/about">About</Link>
      {" "}
      <Link to="Https://www.naver.com">네이버</Link>
    </div>
  )
}

export default Main