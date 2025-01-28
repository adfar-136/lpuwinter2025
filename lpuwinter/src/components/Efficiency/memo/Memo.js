import React, { useMemo, useState } from 'react'

function Memo() {
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(1000)
    const isEven =useMemo(()=>{
       let i = 0;
       while(i<2000000000) i++;
       return number%2===0
    },[count])
  return (
    <div>
      <h1>COunt : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{isEven?"COunt is even":"count is odd"}</h1>
      <h1>Number :{number}</h1>
      <button onClick={()=>setNumber(number-1)}>Decrement Number</button>
    </div>
  )
}

export default Memo
