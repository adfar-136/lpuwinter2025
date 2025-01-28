import React from 'react'
import useCounter from './useCounter'

function Counterr() {
    const {count,handleIncrement,handleDecrement} = useCounter()
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counterr
