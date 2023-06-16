import React from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login-container">
      <table>
        <tbody>
          <tr>
            <td className="content">
              <h1>로그인</h1>
              <form>
                <div>
                  <input type="text" placeholder="이메일을 입력해주세요." maxLength="10" autoFocus/><br />
                  <input type="password" placeholder="비밀번호를 입력해주세요." maxLength="15" /><br />
                  <button className="login-button">로그인</button><br/>
                  <button className="join-button"><Link to="/Join">회원가입</Link></button>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
  )

      

   
  
}



export default Login;