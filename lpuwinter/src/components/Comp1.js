import React from 'react'
import Comp2 from './Comp2'

export default function Comp1({fname,age,children}) {
  return (
    <div>
      <h1>I am a component 1</h1>
      <Comp2>
        <h1> i am a achuiodfuhdufi</h1>
      </Comp2>
      {children}
    </div>
  )
}
