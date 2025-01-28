import React, { useState } from 'react'
import useList from './useList'

function Todo() {
    const {list,push,pull} = useList()
    const [text,setText] = useState("")
    function handleSubmit(e){
        e.preventDefault()
      push(text)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
      <ul>
        {list.map((item,index)=><li key={item}>{item} <button onClick={()=>pull(index)}>Remove</button></li>)}
      </ul>
    </div>
  )
}

export default Todo
