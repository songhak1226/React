import React from 'react'

const Ex04Board = ({path,Name,Dice,Score}) => {

  return (
    <div className='board-item'>
        <h3>{Name}</h3>
        <p>{Dice}</p>
        <img></img>
        <h4>현재 점수는?</h4>
        <h3>{Score}</h3>
    </div>
  )
}

export default Ex04Board