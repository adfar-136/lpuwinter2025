import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    function handleIncrement(){
        setCount(count+1)
    }
    useEffect(()=>{
        if(count === 15){
            throw new Error("App Crashedddd....")
        }
    })
  return (
    <div>
      <h1>COunt : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter
