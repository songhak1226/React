import React from 'react'

const Ex05ButtonList = ({chBox}) => {
  return (
    <div>
        <button onClick={chBox}>작게</button>
        <button onClick={chBox}>원본</button>
        <button onClick={chBox}>크게</button>
    </div>
  )
}

export default Ex05ButtonList