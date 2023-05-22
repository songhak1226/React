import React, { useState } from 'react'
import { ColorContext } from './Context/Ex02ColorContext'
import Ex02ColorList from './components/Ex02ColorList'
import Ex02ColorResult from './components/Ex02ColorResult'

const Ex02 = () => {

    /* Context란? 리액트 컴포넌트 간에 값을 전역적으로 공유할 수 있게 해주는 기능
    A. Props로만 데이터를 전달했을 때 발생할 수 있는 문제는?
    Q. 깊숙히 위치한 컴포넌트에 데이터를 전달해야할 경우, 여러 컴포넌트에 연달아 Props를 전달해줘야 한다
        => 불편, 실수가 잦음 => Props Drilling
        그래서 우리는 context로 상태를 전역적으로 관리해줄 것


    ** 만드는 순서
    1. context를 생성해준다. (createContext) => export
    2. context를 사용할 컴포넌트에 import
    3. 컴포넌트를 Context Provider로 감싸준다
    4. 데이터를 받아올 컴포넌트에서 useContext함수를 사용한다

    */

    const [choiceColor, setChoiceColor] = useState('red')
  
    return (
    // value 안에는 우리가 전역적으로 사용할 데이터들을 넣어준다
    <ColorContext.Provider value={{choiceColor, setChoiceColor}}>
    <div>
        <h1>변경할 색상을 선택해주세요</h1>
        <Ex02ColorList/>
    </div>
    <div>
        <h1>선택한 색상</h1>
        <Ex02ColorResult/>
    </div>
    </ColorContext.Provider>
    
  )
}

export default Ex02