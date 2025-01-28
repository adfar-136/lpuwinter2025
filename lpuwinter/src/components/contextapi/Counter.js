import React, { useContext } from 'react'
import { myContext } from './StateProvider'
function Counter() {
    const {count,setCount,handleIncrement} = useContext(myContext)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>++++++++</button>
    </div>
  )
}

export default Counter
