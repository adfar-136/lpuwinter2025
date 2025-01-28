import React, { memo, useState } from 'react'

function Counter({click}) {
    const [count,setCount] = useState(0)
    console.log("Child component counter")
  return (
    <div>
      <h1>I am a child component count : {count} </h1>
      <button onClick={()=>setCount(count+1)}>Increment child count</button>
      <button onClick={click}>+++++</button>
    </div>
  )
}
export default memo(Counter)