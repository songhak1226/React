import React from 'react'

const Ex04Board = ({Path,Name,Score,dice}) => {

  return (
    <div className='board-item'>
        <h3>{Name}</h3>
        <p>{dice}</p>
        <img src={Path}></img>
        <h4>현재 점수는?</h4>
        <h3>{Score}</h3>
    </div>
  )
}

export default Ex04Board