import React, { createContext, useState } from 'react'
import StateConsumer from './StateConsumer'
import Counter from './Counter'
const myContext = createContext()
export default function StateProvider() {
    const [count,setCount] = useState(0)
   function handleIncrement(){
    setCount(count+1)
   }
  return (
    <div>
      <myContext.Provider value={{count,setCount,handleIncrement}}>
         <StateConsumer/>
         <Counter/>
      </myContext.Provider>
    </div>
  )
}

export {myContext}