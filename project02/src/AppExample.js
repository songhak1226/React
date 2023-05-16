// rafce + enter

/* 
    여러분의 팀원을 소개해주세요
    이름 : 홍길동
    성별 : 여성 / 남성
    좋아하는 노래 : 윤하 - 사건의 지평선

    단, Component와 props의 개념을 이용할 것
    - MemberBox라는 컴포넌트를 생성하기
*/

import './App.css';
import MemberBox from './components/MemberBox'

const AppExample = () => {
    return (
      <div>
      <MemberBox name="이지희" gender='W' music="뉴진스 - Ditto"></MemberBox>
      <MemberBox name="신지훈" gender='M' music="빅뱅 - Cafe"></MemberBox>
      <MemberBox name="김다운" gender='M' music="아이유 - 새 신발"></MemberBox>
      <MemberBox name="윤영현" gender='M' music="윤하 - 사건의 지평선"></MemberBox>
      </div>
  )
}

export default AppExample