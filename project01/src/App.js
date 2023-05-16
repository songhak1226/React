// import logo from './logo.svg';
import './App.css';

function App() {

  /* 
      JSX : 하나의 파일 안에 HTML문법과 JS문법을 동시에 작성할 수 있는 파일 확장자
            => document 객체에 별도로 접근할 필요 없음
            => 가독성이 좋고 기능별로 분류하기 쉽다

      ** JSX 규칙
      1. 여러 요소가 있다면 반드시 하나의 부모요소로 감싸주어야 한다.
          +) div가 아니어도 상관없다. <></>
      2. 표현식 사용 가능
          JS 문법을 사용 => return문 안에서 {} 안에 작성
          단, {}내에 if문은 사용할 수 없다.
          - 조건이 하나일 때 - {}안에 &&연산자를 사용
          - 조건이 두개일 때 - 삼항연산자
            조건 ? 실행문1 : 실행문2
          - 조건이 세개 이상일 때는 조건문을 표현식이 아닌, return 위쪽에서 사용

      3. 기존 html 문법과 다른 점들 정리
          a. class 대신 className을 사용한다.
          b. html태그 (DOM요소)를 사용할 때는 무조건 소문자로 시작
             => 대문자는 따로 쓸일이 있기 때문
          c. content가 없더라도 끝태그를 생략할 수 없다.

      4. 스타일링 적용
          a. css 안에 작성
            - import 되어있는 css에 삽입
          b. 객체 형태로 작성
            - 객체 형태로 원하는 스타일을 작성
            - 원하는 태그의 style 속성으로 객체 입력
            단, 객체 안에서는 camelCase로 작성
            예를 들어 css 에서는 background-color라고 작성한다면,
            객체 내에서는 backgroundColor라고 작성해야 함
     */



  const txtStyle ={
    color : 'blue',
    fontWeight : '900'
  }
  
  
  let name = '강태우'
  //let state = 'open'
  
  // 3. 조건문이 3개 이상일 때
  let text

  if(name === '강태우'){
    text = "DB"
  } else if (name === '선영표'){
    text = "Front-End"
  } else {
    text = "Back-End"
  }

  // index.js에 있는 React.StrictMode를 켜놓으면 코드가 두번씩 실행됨
  console.log('현재 방문한 사람은', name)

  return (
      <div className='container'>
      <p style={txtStyle}>윤영현의 리액트 홈페이지에 오신 것을 환영합니다!</p>

      {/* 조건이 하나일 때 */}
      {/* {state === 'open' && <p>{name}님 반갑습니다!</p>} */}

      {/* 조건이 두개일 때 */}
      {name === '강예진' ? <p>환영합니다!</p> : <p>죄송합니다. 이용하실 수 없습니다.</p>}

      {/* 조건이 세개일 때 */}
      {text}

    </div> 



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
