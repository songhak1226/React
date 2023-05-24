import React, { useRef } from 'react'

const Ex07 = () => {

    const textRef = useRef()

    const imgRef = useRef()

    const changeImg = (src)=>{
        imgRef.current.src = `${src}`

    }

    let img1 = "https://blog.kakaocdn.net/dn/M4jaq/btrVcMrHyu8/7pcxA0KruCVpakcglPt7s0/img.gif"
    let img2 = "https://blog.kakaocdn.net/dn/20laq/btrIjNDEzc0/tkzwM5eDV96qXU4uOqhn30/img.gif"

    const chImg= ()=>{
        console.log(imgRef.current.src);
        if( textRef.current.value == "윈터"){
            changeImg(img2)
        } else if(textRef.current.value == "카리나"){
            changeImg(img1)
        }

        textRef.current.value = ""
        textRef.current.focus()
    }

  return (
    <div>
        <p>희망하는 사진이 있으신가요?</p>
        <input type ="text" ref={textRef}/>
        <button onClick={chImg}>변경</button>

        <div>
            <img src='https://blog.kakaocdn.net/dn/cWmx5I/btrU2KhTJ3I/CQywXXRy17kXziHrinbuAk/img.gif'
            width='250px'
            ref={imgRef}></img>
        </div>
    </div>
  )
}

export default Ex07