import React, { useRef } from 'react'
import Ex05ButtonList from './components/Ex05ButtonList'

const Ex05 = () => {

    /* useRef : 특정 DOM 요소에 접근하고 싶을 때
        - 바닐라 JS에서는 getElementById, querySelector 등을 사용해서 특정 DOM 요소에 접근 해주었다
        - React를 사용할 때 특정 DOM 요소에 직접 접근해야하는 일이 발생할 수 있다. 
            (ex. 포커싱 작업, 속성을 변경)
            => useRef라는 React Hook을 사용할 것
    */

    const divRef = useRef()
    

    const changeSize = (size)=>{
        // div의 사이즈를 조절하는 코드
        divRef.current.style.width = `${size}px`
        divRef.current.style.height = `${size}px`

    }

    const chBox=(e)=>{
    console.log('Change Box Function',e.target.innerText);
    console.log('divRef',divRef.current.style.width);
    if(e.target.innerText == "작게"){
        changeSize(100)
    } else if(e.target.innerText == "원본"){
        changeSize(150)
    } else {
        changeSize(200)
    }
   }
  return (
    <div>
        <Ex05ButtonList chBox={chBox}/>
        <div 
        ref = {divRef}
        style={{
            backgroundColor : "skyblue", width : "150px", height : "150px"
        }}></div>
    </div>
  )
}

export default Ex05