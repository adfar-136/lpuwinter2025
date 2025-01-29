import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './action';
function ThunkCounter() {
    const count = useSelector(state=>state);
    const dispatch = useDispatch()
  return (
    <div>
      <h1>COunt : {count}</h1>
      <button onClick={()=>dispatch(increment(400))}>Increment</button>
      <button onClick={()=>dispatch(decrement(400))}>Decrement</button>
    </div>
  )
}

export default ThunkCounter
