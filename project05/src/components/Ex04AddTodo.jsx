import React, { useContext } from 'react'
import { TodoContext } from '../Context/Ex04TodoContext'

const Ex04AddTodo = () => {
    // 전역 데이터 중 , 내가 가지고 와야 할 자료들
    const{newTodo, handleNewTodo, handleTodoAddition}=useContext(TodoContext)

  return (
    <div>
        <input type='text' onChange={handleNewTodo} value={newTodo}/>
        <button onClick={handleTodoAddition}>추가</button>
    </div>
  )
}

export default Ex04AddTodo