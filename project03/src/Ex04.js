import React, { useState } from 'react'
import Board from './components/Ex04Board'
import './style/Ex04.css'

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 /* 주사위 게임을 만들어보자!

        1) user가 '던지기!' 버튼을 클릭한다. 
        2) 유저의 주사위 숫자가 랜덤으로 표시된다. 
        3) 컴퓨터의 주사위 숫자 또한 랜덤으로 표시된다. 
        4) 유저의 주사위 숫자 - 컴퓨터의 주사위 숫자를 비교 
            3-1) 내가 이겼을 경우는 나의 점수 + 1
            3-2) 내가 졌을 경우는 컴퓨터의 점수 + 1 
        5) 먼저 5점을 낸 사람이 최종 승리 
            => alert 당신의 승리입니다! 당신의 패배입니다! 
        6) RESET 버튼을 클릭 시, 모든 내용이 초기화 
            - 점수, 이미지 경로, 이미지 파일 번호 


        HINT!! 필요한 정보들 
        - 주사위 숫자 (나, 컴퓨터)
        - 이미지 경로 (나, 컴퓨터)
        - 점수 (나, 컴퓨터)
        ===> Board의 props 데이터로 
    */

const Ex04 = () => {

    // 이미지 경로 가져오기 (단! public 폴더 이용할 때만!)
    let imgPath = '/img/dice';

   
    const[ranNum1, setRanNum1] = useState(0);
    const[ranNum2, setRanNum2] = useState(0);
    const[myDice, setMyDice] = useState(0);
    const[comDice, setComDice] = useState(0);
    const[myScore, setMyScore] = useState(0);
    const[comScore, setComScore] = useState(0);
    const[myPath, setMyPath] = useState("");
    const[comPath, setComPath] = useState("");


    const diceCk = ()=>{
        setRanNum1(parseInt(Math.random()*6+1));
        setMyDice(parseInt(ranNum1));

        setRanNum2(parseInt(Math.random()*6+1));
        setComDice(parseInt(ranNum2));

        setMyPath(imgPath+myDice+".png");
        setComPath(imgPath+comDice+".png");



        if(myDice > comDice){
            setMyScore(myScore+1);
        } else if(myDice < comDice) {
            setComScore(comScore+1);
        } else {
            setMyScore(myScore+0);
            setComScore(comScore+0);
        }
    }

    const resetCk = ()=>{
        setMyDice(0);
        setComDice(0);
        setMyScore(0);
        setComScore(0);
    }

    

  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <div className='btn-container'>
            <Button variant="info" onClick={diceCk}>던지기!</Button>{' '}
            <Button variant="secondary" onClick={resetCk}>RESET</Button>
        </div>

        <div className='board-container'>
            <Board path={imgPath} Name="나" Dice={myDice} Path={myPath} Score={myScore}/>
            <Board path={imgPath} Name="컴퓨터" Dice={comDice} Path={comPath} Score={comScore}/>
        </div>
    </div>
  )
}

export default Ex04