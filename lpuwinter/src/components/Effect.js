import React, { useEffect, useState } from 'react'

export default function Effect() {
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(10000)
    useEffect(()=>{
      // function timer(){
      //   console.log("Adfar")
      // }
      // document.addEventListener("click",timer)
      // return ()=>{
      //   document.removeEventListener("click",timer)
      // }
      var timer = setInterval(()=>{
        console.log("Adfar")
      },3000)
      return ()=>{
        clearInterval(timer)
      }
    })
  return (
    <div>
      <h1>ADfar Rasheed</h1>
      <h1>count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>+++++</button>
      <h1>number : {number}</h1>
      <button onClick={()=>setNumber(number+1)}>++___+++</button>
    </div>
  )
}
