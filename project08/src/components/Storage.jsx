import React, { useState } from 'react'

const Storage = () => {
    /*
        Local Storage vs Session Storage
        - 주의사항) 둘다 브라우저에 저장을 하는 데이터
        - local storage : 동일한 PC내에서 동인한 브라우저 => 저장된 데이터를 불러올 수 있다
            예) 자동로그인, 장바구니
            => 브라우저를 닫더라도 데이터가 계속해서 저장되어 있다
        - session storage : 브라우저 창이 종료되면 세션도 함께 종료되면서 데이터 소멸
            예) 로그인 기록
    */

    const [localText, setLocalText] = useState('')
    const [localText2, setLocalText2] = useState('')
    const setLocal = ()=>{
        console.log('local storage 저장', localText);
        // 로컬 스토리지에 저장하기
        localStorage.setItem('data', localText);
    }
    const getLocal = ()=>{
        // 로컬 스토리지에서 데이터 꺼내오기
        localStorage.getItem('data');
        setLocalText2(localStorage.getItem('data'))
    }

    const [sessionText, setSessionText] = useState('')
    const [sessionText2, setSessionText2] = useState('')
    const setSession = ()=>{
        // 세션 저장하기
        sessionStorage.setItem('data', sessionText)
    }
    const getSession = ()=>{
        // 세션 가져오기
        sessionStorage.getItem('data')
        setSessionText2(localStorage.getItem('data'))
    }
  return (
    <div className='list-container'>
        <div>
            <h2>Local Storage : </h2>
            <input type='text' onChange={(e)=>{setLocalText(e.target.value)}}></input>
            <button onClick={setLocal}>저장</button>
            <button onClick={getLocal}>가져오기</button>
            <br/>
            {localText2}
        </div>

        <div>
            <h2>Session Storage : </h2>
            <input type='text' onChange={(e)=>{setSessionText(e.target.value)}}></input>
            <button onClick={setSession}>저장</button>
            <button onClick={getSession}>가져오기</button>
            <br/>
            {sessionText2}
        </div>
        <div>
            {/* .clear() => 스토리지 초기화
                localStorage.clear()
                
             */}
            <button onClick={()=>{window.localStorage.removeItem('data')}}>local storage 삭제</button>
            <button onClick={()=>{window.sessionStorage.removeItem('data')}}>session storage 삭제</button>
        </div>
    </div>
  )
}

export default Storage