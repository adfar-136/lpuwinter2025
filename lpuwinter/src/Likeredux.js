import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './reduxstore/action'
function Likeredux() {
    const count = useSelector(state=>state.counter.count);
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>Like : {count}</button>
    </div>
  )
}

export default Likeredux
