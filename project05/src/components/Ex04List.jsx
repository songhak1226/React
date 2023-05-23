import React, { useContext } from 'react'
import Ex04ListItem from './Ex04ListItem'
import { TodoContext } from '../Context/Ex04TodoContext'

const Ex04List = () => {

    const{todos} = useContext(TodoContext)
  return (
    <div>
        {todos.map((item, index) => 
           <Ex04ListItem todo={item} index={index} key={item.text+index}/>
        )}
    </div>
  )
}

export default Ex04List