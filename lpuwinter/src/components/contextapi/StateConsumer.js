import React, { useContext } from 'react'
import { myContext } from './StateProvider'
function StateConsumer() {
    const data = useContext(myContext)
    console.log(data)
  return (
    <div>
      <h1>Adffar Rasheed</h1>
      <h1>count : {data.count}</h1>
      <button onClick={()=>data.setCount(data.count+1)}>++++</button>
    </div>
  )
}

export default StateConsumer
