import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Storage from './components/Storage';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  /* 미션 수행 순서
    1) Route 처리
     - BrowserRouter, Routes, Route, ... etc
     - import export

    2) App.js에서 list state관리 하기
      - tip 함수 또한 props로 보낼 수 있다는것을 명심
      ex) const[list, setList] = useState([])
          ...
          <Main list ={list} setList={setList}/>
    
    3) Header Misson
    4) Product List Mission
    5) Product Item Misson
    6) Product Detail Misson
  */

  const [list, setList]=useState([])

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/list' element={<ProductList list={list} setList={setList}/>}></Route>
        <Route path='/detail/:num' element={<ProductDetail list={list}/>}></Route>
        <Route path='/storage' element={<Storage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
