import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const Ex04 = () => {

    let movieUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230501';
  
    /* 화면에 영화 랭킹 띄우기 
    => 네트워크 요청을 위해 사용하는 API들
    - jQuery + AJax => 논외
    - Fetch API (new)
        -> JS 제공, 별도로 설치할 필요 X
    - Axios (new)
    
    */

    /*
    왜 API를 가지고 오는 것을 useEffect 안에 넣어줄까
    - useEffect의 순서는 화면이 마운트 된 이후
    - 화면이 먼저 뜨고 -> 데이터를 가지러 감
    - 사용자 입장에서 조금 더 빠른 황경을 제공
    */

    const[list,setList] = useState([])

    useEffect(()=>{
        /*
        // case.1) Fetch API
        fetch(movieUrl)
        .then(res => res.json()) // 받아온 데이터를 json 형식의 데이터로 반환
        .then(res => {
            console.log('fetch : ', res)
            // fetch API로 가지고 온 값을 1~10위까지 화면에 띄워주기
            console.log(res.boxOfficeResult.dailyBoxOfficeList);
            setList(res.boxOfficeResult.dailyBoxOfficeList)
        })
        .catch(()=>{console.error('error')})
        */

        /* case.2) Axios 라이브러리
        (1) Axios 설치 - npm i axios
        (2) import axios from 'axios'
        */

        axios.get(movieUrl)
        .then(res => {
            console.log('axios res : ', res.data.boxOfficeResult.dailyBoxOfficeList)
            setList(res.data.boxOfficeResult.dailyBoxOfficeList)
        })
        .catch(()=>console.error('error'))

        /*
         ** Axios VS Fetch
         (1) Fetch
            - 장점
              1. JS의 내장 라이브러리이므로 굳이 설치하거나 import할 필요가 없다
              2. 내장 라이브러리이기 때문에 업데이트에 영향을 받지 않는다

            - 단점
              1. 지원하지 않는 브라우저가 존재했었다.. (IE) => jQuery + ajax가 흥했던 이유
              2. JSON으로 변환해주는 과정이 필요하다
              3. axios에 비해 기능이 적다

         (2) Axios
            - 장점
              1. 기능이 많다!
              2. 크로스 브라우징 최적화 (다양한 브라우저 지원)

            - 단점
              1. 설치 필요

        */


    },[])

    

    return (
        <div className='container'>
            <h1>영화순위</h1>
            {list.map(item => <p>{item.rank}.{item.movieNm} | {item.openDt}</p>)}
            
        </div>
    )
}

export default Ex04