import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const About = () => {
  /* 
    useNavigate
    - 페이지 이동을 도와주는 React Hooks

    (1) import {useNavigate} from 'react-router-dom'
    (2) const 변수 = useNavigate()
    (3) 페이지 이동을 해야할 때, 변수("경로")

    ex) const nav = useNavigate()
        nav("/mypage")
  */

    const nav = useNavigate()
    let auth = true;

  return (
    <div>About
      <hr/>
      {/* 만약, 회원이라면 mypage로 이동
          비회원이라면 main으로 이동
      */}
      <button onClick={()=>{
        auth ? nav('/mypage') : nav('/')
        }}>마이페이지</button>

        <br/>
        <Link to="/product/1?popular=인기">[1] 정보처리기사 스터디 구합니다.</Link>
        <br/>
        <Link to="/product/2">[2] 배그 4인큐 구합니다.</Link>
        <br/>
        <Link to="/product/3">[3] 집에 갈 사람 구해요. 1/99 </Link>

    </div>
  )
}

export default About