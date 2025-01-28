import React, { useMemo } from 'react'
import { filteredTodos } from './utils'
import "./todo.css"
function TodoList({todos,tab,theme}) {

    const todoArr = useMemo(()=>filteredTodos(todos,tab),[todos,tab])
  return (
    <div className={theme}>
      <ul>
        {todoArr.map(todo => (
            <li key={todo.id} style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
