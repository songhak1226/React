import React from 'react'
import menu from './menu.json'
import MenuItem from './components/Ex02menuItem'
import './App.css'


const Ex02 = () => {
    console.log('menu :', menu.list);
    let menulist2 = menu.list.filter(item => item.price >= 4200);
  return (
    
    <div>
      <h1>전체메뉴</h1>
      <div className='menu-container'>
        {menu.list.map(item => <MenuItem key={item.name} name={item.name} price={item.price} content={item.content} imgSrc={item.imgSrc}/>)}
      </div>

      <h1>4200원보다 비싼 메뉴들</h1>
      <div className='menu-container'>
      {/* 문제 풀이
      메뉴의 가격이 4200원 이상인 메뉴만 보여주세요
      사진, 제목, 가격, 내용이 출력되도록 */}
      {menulist2.map(item => <MenuItem key={item.name} name={item.name} price={item.price} content={item.content} imgSrc={item.imgSrc}/>)}
      </div>
    </div>

    
  )
}

export default Ex02