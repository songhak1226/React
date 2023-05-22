import React, { useContext } from 'react'
import { ColorContext } from '../Context/Ex02ColorContext'

const Ex02ColorResult = () => {
    const {choiceColor} = useContext(ColorContext)
  return (
    <div>
        <div style={{
        width : '100px',
        height : '100px',
        backgroundColor : `${choiceColor}`
        }}>
        </div>
    </div>
  )
}

export default Ex02ColorResult