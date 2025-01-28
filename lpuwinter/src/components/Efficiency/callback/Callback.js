import React, { useCallback, useState } from 'react'
const a = new Set()
function Callback() {
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(1000)
    const handleIncrementC =useCallback(()=>{
        setCount(count+1)
    },[count])
    const handleDecrementC =useCallback(()=>{
        setCount(count-1)
    },[count])
    const handleIncrementN=useCallback(()=>{
        setNumber(number+1)
    },[number])
    const handleDEcrementN=useCallback(()=>{
        setNumber(number-1)
    },[number])
    a.add(handleIncrementN)
    a.add(handleIncrementC)
    a.add(handleDecrementC)
    a.add(handleDEcrementN)
    alert(a.size)
  return (
    <div>
        <h1>Count:{count}, Number :{number}</h1>
      <button onClick={handleIncrementC}>Increment COunt</button>
      <button onClick={handleDecrementC}>Decrement COunt</button>
      <button onClick={handleIncrementN}>Increment Number</button>
      <button onClick={handleDEcrementN}>Decrement Number</button>
    </div>
  )
}

export default Callback
