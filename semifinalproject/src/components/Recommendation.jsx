import React, { useState } from 'react';
import axios from 'axios';
import '../css/Recommendation.css';

function Recommendation() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState('');
  const [degree, setDegree] = useState(0);
  const [acid, setAcid] = useState(0);
  const [sweet, setSweet] = useState(0);
  const [sour, setSour] = useState(0);
  const [body, setBody] = useState(0);
  const [bitter, setBitter] = useState(0);
  const [imargery, setImargery] = useState(0);
  const [smell, setSmell] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const getServerData = async () => {
    const data = {
      liq_type: type,
      liq_degree: degree,
      liq_sweet: sweet,
      liq_sour: sour,
      liq_bitter: bitter,
      liq_body: body,
      liq_cacid: acid,
      liq_imargery: imargery,
      liq_smell: smell
    };

    console.log("주종", type);
    console.log("도수", degree);
    console.log("단맛",sweet);
    console.log("신맛",sour);
    console.log("쓴맛",bitter);
    console.log("바디감",body);
    console.log("탄산", acid);
    console.log("여운", imargery);
    console.log("향", smell);
    console.log("총데이터", data);
  };



  return (
    <div className='Header-main'>
      <h1>전통주 추천</h1>
      {step === 1 && (
        <div> 
          <h2>어떤 주종을 마시고 싶으신가요?</h2>
          <div className='btn1'>
          <button onClick={() => { setType('탁주'); nextStep(); }}>탁주</button>
          <button onClick={() => { setType('약/청주'); nextStep(); }}>약청주</button>
          <button onClick={() => { setType('과실주'); nextStep(); }}>과실주</button>
          <button onClick={() => { setType('증류주'); nextStep(); }}>증류주</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>원하는 도수는 어느 정도 인가요?</h2>
          <div className='btn2'>
          <button onClick={() => { setDegree(0); nextStep(); }}>0~9도</button>
          <button onClick={() => { setDegree(1); nextStep(); }}>10~19도</button>
          <button onClick={() => { setDegree(2); nextStep(); }}>20~29도</button>
          <button onClick={() => { setDegree(3); nextStep(); }}>30도 이상</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step === 3 && type !== '증류주' && (
        <div>
          <h2>탄산이 있는 술을 좋아하세요?</h2>
          <div className='btn3'>
          <button onClick={() => { setAcid(2); nextStep(); }}>네</button>
          <button onClick={() => { setAcid(1); nextStep(); }}>보통</button>
          <button onClick={() => { setAcid(0); nextStep(); }}>아니오</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step === 3 && type === '증류주' && (
        <div>
          <h2>달콤한 술을 좋아하세요?</h2>
          <div className='btn3-1'>
          <button onClick={() => { setSweet(2); nextStep(); }}>네</button>
          <button onClick={() => { setSweet(1); nextStep(); }}>보통</button>
          <button onClick={() => { setSweet(0); nextStep(); }}>아니오</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step === 4 && type !== '증류주' && (
        <div>
          
          <h2>달콤한 술을 좋아하세요?</h2>
          <div className='btn4'>
          <button onClick={() => { setSweet(2); nextStep(); }}>네</button>
          <button onClick={() => { setSweet(1); nextStep(); }}>보통</button>
          <button onClick={() => { setSweet(0); nextStep(); }}>아니오</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step === 4 && type === '증류주' && (
        <div>
          <h2>바디감이 있는 술을 좋아하세요?</h2>
          <div className='btn4-1'>
          <button onClick={() => { setBody(2); nextStep(); }}>네</button>
          <button onClick={() => { setBody(1); nextStep(); }}>보통</button>
          <button onClick={() => { setBody(0); nextStep(); }}>아니오</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step === 5 && type !== '증류주' && (
        <div>
          <h2>새콤한 술을 좋아하세요?</h2>
          <div className='btn5'>
          <button onClick={() => { setSour(2); nextStep(); }}>네</button>
          <button onClick={() => { setSour(1); nextStep(); }}>보통</button>
          <button onClick={() => { setSour(0); nextStep(); }}>아니오</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step === 5 && type === '증류주' && (
        <div>
          <h2>입 안에 여운이 남는 술을 좋아하시나요?</h2>
          <div className='btn5-1'>
          <button onClick={() => { setImargery(2); nextStep(); }}>네</button>
          <button onClick={() => { setImargery(1); nextStep(); }}>보통</button>
          <button onClick={() => { setImargery(0); nextStep(); }}>아니오</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step === 6 && type !== '증류주' && (
        <div>
          <h2>바디감이 있는 술을 좋아하세요?</h2>
          <div className='btn6'>
          <button onClick={() => { setBody(2); nextStep(); }}>네</button>
          <button onClick={() => { setBody(1); nextStep(); }}>보통</button>
          <button onClick={() => { setBody(0); nextStep(); }}>아니오</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step === 6 && type === '증류주' && (
        <div>
          <h2>향이 강한 술을 좋아하세요?</h2>
          <div className='btn6-1'>
          <button onClick={() => { setSmell(2); nextStep(); }}>네</button>
          <button onClick={() => { setSmell(1); nextStep(); }}>보통</button>
          <button onClick={() => { setSmell(0); nextStep(); }}>아니오</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step === 7 && type !== '증류주' && (
        <div>
          <h2>쓴맛이 나는 술을 좋아하세요?</h2>
          <div className='btn7'>
          <button onClick={() => { setBitter(2); nextStep(); }}>네</button>
          <button onClick={() => { setBitter(1); nextStep(); }}>보통</button>
          <button onClick={() => { setBitter(0); nextStep(); }}>아니오</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

      {step ===7 && type == '증류주' && (
        <div>
          <h2>완료! 결과를 확인하세요.</h2>
          <div className='result'>
          <button onClick={getServerData}>결과 확인</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}

    {step ===8 && (
        <div>
          <h2>완료! 결과를 확인하세요.</h2>
          <div className='result'>
          <button onClick={getServerData}>결과 확인</button>
          <button onClick={prevStep}>이전</button>
          </div>
        </div>
      )}
    </div>
  
  
);
}
  

export default Recommendation