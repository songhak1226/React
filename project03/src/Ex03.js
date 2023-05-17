import React, { useState } from 'react'

const Ex03 = () => {

    /* 랜덤 게임
    1) 랜덤한 수 뽑기 1~3
    2) 내가 누른 버튼의 숫자를 구하기
    3) 1 숫자와 2숫자를 비교
        - 만약 두 숫자가 같다면 <p>정답입니다!</p>
        - 다르다면 <p>땡!</p>
    단 각각 변화하는 수들은 바로 화면에 보여지게 한다*/

    // let ranNum = parseInt(Math.random()*3+1)
    const[ranNum, setRanNum] = useState(0)
    const [num, setNum] = useState(0);

    const btnCk = (e)=>{
        // setNum(e);

        // 랜덤한 수 세팅
        setRanNum(parseInt(Math.random()*3+1))

        //내가 선택한 수 세팅
        setNum(e.target.innerText)
    }

  return (
    <div>
        {/* <button onClick={()=>btnCk(1)}>1</button>
        <button onClick={()=>btnCk(2)}>2</button>
        <button onClick={()=>btnCk(3)}>3</button> */}

        <button onClick={btnCk}>1</button>
        <button onClick={btnCk}>2</button>
        <button onClick={btnCk}>3</button>

        <div>
            <p>내가 입력한 숫자 : {num}</p>
            <p>랜덤 숫자 : {ranNum}</p>
            {num == ranNum ? <p>정답입니다!</p> : <p>땡!</p>}
        </div>
    </div>
  )
}

export default Ex03