import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Ex03ThemeContext'

const Ex03Header = () => {


  const{isDark} = useContext(ThemeContext)

  return (
    <div style={{
      backgroundColor : isDark ? "black" : "white",
      color : isDark ? "white" : "black"
    }}>Ex03Header</div>
  )
}

export default Ex03Header