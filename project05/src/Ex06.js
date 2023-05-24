import React, { useRef } from 'react'

const Ex06 = () => {

    const divRef = useRef()

    let pdfStyle = {
        width : '100%',
        hight : '100%'
    }

    const changePdf = (src)=>{
        // div의 사이즈를 조절하는 코드
        divRef.current.src = `${src}`
        divRef.current.src = `${src}`

    }

    const chPdf = ()=>{
        console.log(divRef.current.src);
        if(divRef.current.src == "http://localhost:3000/pdf/pdf1.pdf"){
            changePdf("http://localhost:3000/pdf/pdf2.pdf")
        } else {
            changePdf("http://localhost:3000/pdf/pdf1.pdf")
        }
    }

  return (
    <div style={{height : "100vh"}}>
        <h3>오늘의 학습자료
            <button onClick={chPdf}>변경</button>
        </h3>
        <iframe 
        ref = {divRef}
        style={pdfStyle} src='/pdf/pdf1.pdf'></iframe>
    </div>
  )
}

export default Ex06