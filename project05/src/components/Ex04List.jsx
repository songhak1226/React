import React, { useContext } from 'react'
import Ex04ListItem from './Ex04ListItem'
import { TodoContext } from '../Context/Ex04TodoContext'

const Ex04List = () => {

    const{todos} = useContext(TodoContext)
  return (
    <div>
        {todos.map((item, idx) => 
           <Ex04ListItem todo={item} index={idx} key={item.text+idx}/>
        )}
    </div>
  )
}

export default Ex04List