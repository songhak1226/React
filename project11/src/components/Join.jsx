import React from 'react'
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div className="Join-container">
    <table>
      <tbody>
        <tr>
          <td className="content1">
            <h1>회원가입</h1>
            <form>
              <div>
                <input type="text" placeholder="이메일을 입력해주세요." maxLength="10" autoFocus/><br />
                <input type="password" placeholder="비밀번호를 입력해주세요." maxLength="15" /><br />
                <input type="password" placeholder="비밀번호를 다시 입력해주세요." maxLength="15" /><br />
                <input type="text" placeholder="닉네임을 입력해주세요." maxLength="10" /><br />
                <button className="join-button1"><Link to="/Login">회원가입 완료</Link></button>
              </div>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
  
}

export default Join