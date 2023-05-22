import React, { useState } from 'react'
import Ex03Header from './components/Ex03Header'
import Ex03Main from './components/Ex03Main'
import {ThemeContext} from './Context/ThemeContext'

const Ex03 = () => {
    const[isDark, setIsDark] = useState(false)
  return (
    <ThemeContext.Provider>
    <div>
        <Ex03Header/>
        <Ex03Main/>
    </div>
    </ThemeContext.Provider>
  )
}

export default Ex03