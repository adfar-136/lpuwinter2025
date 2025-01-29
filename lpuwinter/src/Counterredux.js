import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './reduxstore/action'
function Counterredux() {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch(increment(100))}>Increment 100</button>
      <button onClick={()=>dispatch(decrement(200))}>Decrement 200</button>
    </div>
  )
}

export default Counterredux
