import React from 'react'
import useCounter from './useCounter'

function Like() {
    const {count,handleIncrement} = useCounter()
  return (
    <div>
      <button onClick={handleIncrement}>Like :{count}</button>
    </div>
  )
}

export default Like
