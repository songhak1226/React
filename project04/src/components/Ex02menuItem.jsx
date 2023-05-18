import React from 'react'
 

const Ex02menuItem = ({name, price, content, imgSrc}) => {

  return (
    <div>
        <img src = {imgSrc} width = "200px"></img>
        <p>
            <span>{name}</span>
            <span>{price}원</span>
        </p>
        <p>{content}</p>

    </div>
  )
}

export default Ex02menuItem