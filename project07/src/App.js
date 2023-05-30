import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Main from './components/Main';
import NotFound from './components/NotFound';
import MyPage from './components/MyPage';
import ProductDetail from './components/ProductDetail';

function App() {

  /* 
    React Router 사용해보기
    1. react router dom 설치
      npm i react-router-dom

    2. BrowserRouter
      -> index.js로 가서 App을 BrowserRouter로 감싸기
      -> react router를 사용하기 위해서라면 '필수'

    3. Routes - Route
      - Routes : 여러 Route(경로)들을 감싸서, 하위 Route 중 조건에 맞는 Route 하나만 렌더링해주는 역할
                과거에는 Switch라는 문법의 이름으로 사용
                ex) 유저 "메인페이지 줘"  Routes "메인페이지 줄게"
      - Route : 여러 경로
                필수 속성이 2가지 필요 (path, element)
                path(경로) : 사용자가 이렇게 요청을 했을때
                element(컴포넌트) : 어떤 컴포넌트를 보여주세요~
  */
  return (
    <div className="container">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/product/:num' element={<ProductDetail/>}></Route>

        {/*path가 *라면, 위의 경로 이외에 경로들을 처리 */}
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
