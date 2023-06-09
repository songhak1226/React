import './App.css';
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import {Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const[list,setList] = useState([])

  useEffect(()=>{
    // 화면이 mount 되었을 때 back-end Data를 가져온다.
    axios.get('http://172.30.1.23:8090/shop/')
    .then((res)=>{
      // console.log('result : ',res.data);
      setList(res.data)
    })
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList list={list}/>}></Route>
        <Route path="/product/:num" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
