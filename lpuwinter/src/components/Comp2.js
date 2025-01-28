import React from 'react'

export default function Comp2(props) {
  return (
    <div>
      <h1>I am a Component2</h1>
      <h1>My first name is</h1>
      {props.children}
    </div>
  )
}
