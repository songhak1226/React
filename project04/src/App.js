import logo from './logo.svg';
import './App.css';

function App() {

  let student = [
    {name : '이병건', age : '12', gender : 'man'},
    {name : '주호민', age : '1', gender : 'man'},
    {name : '윈터', age : '20', gender : 'woman'}
  ]

  /* Map 함수
      - 주어진 함수를 호출한 결과를 모아 새로운 함수를 만든다
      ex) student라는 배열의 이름만 뽑아서 새로운 함수를 만들고 싶어
      - 기존 배열은 영향을 받지 않는다
      - key값을 꼭 작성해야 한다
        이때, key값은 서로 중복되면 안된다 고유한 값!

  */

  let newStudent = student.map(item => <button key={item.name}>{item.name}</button>)
  console.log(newStudent);

  // 간단한 자기 소개
  // 안녕하세요 저는 이병건입니다. 제 나이는 12살이에요
  // 안녕하세요 저는 주호민입니다. 제 나이는 1살이에요
  // 안녕하세요 저는 윈터입니다. 제 나이는 20살이에요

  let introduce = student.map(item => <p key={item.name}>안녕하세요 저는 {item.name}입니다. 제 나이는{item.age}살 이에요</p>)
  
  
  //=======================filter=======================
  let womanList = student.filter(item => item.gender == 'woman')
  console.log('woman List :', womanList);
  
  return (
    <div>
      <h2>맵 함수</h2>
      {introduce}

      <hr/>
      <h2>Filter 함수</h2>
      {/* filter 함수는 배열의 각 요소에 대해서 주어진 함수의 결과값이 true인
          요소들만 모아서 새로운 배열로 반환하는 함수를 의미한다
       */}
       {womanList.map(item => <p key={item.name}>{item.name}이구요, {item.age}살입니다.</p>)}

       
      
    </div>
  );
}

export default App;
