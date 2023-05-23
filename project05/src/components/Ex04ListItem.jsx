import React, { useContext } from 'react'
import { TodoContext } from '../Context/Ex04TodoContext'

const Ex04ListItem = ({todo, index}) => {

    //단일요소일때 사용
    const{handleTodoToggle, handleTodoDelete} = useContext(TodoContext)

  return (
    <div>
        <input type='checkbox' id='todo-item' 
            onChange={()=>{handleTodoToggle(index)}}></input>
        <label
            style={{textDecoration : todo.completed ? "line-through" : "none"}}>
                {todo.text}
        </label>
        <button onClick={()=>{handleTodoDelete(index)}}>삭제</button>
    </div>
  )
}

export default Ex04ListItem