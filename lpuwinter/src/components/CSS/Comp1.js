import React from 'react'
import myStyle from "./Comp1.module.css"
import mySty from "./Comp2.module.css"
export default function Comp1() {
  return (
    <div className={mySty.container}>
      <h1 className={myStyle.heading2}>Component 1</h1>
      <p className={myStyle.para2}>CMy name is Adfar and i am not a terrosirjkheh</p>
      <h1 id={myStyle.main}>LPU</h1>
      <h1 className={myStyle["main-p"]}>Random</h1>
    </div>
  )
}
