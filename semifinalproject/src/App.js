import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
