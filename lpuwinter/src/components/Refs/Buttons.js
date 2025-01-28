import React, { useRef } from 'react'

function Buttons() {
    const inputRef= useRef()
    function hanldeClick(){
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "red"
    }
  return (
    <div>
        <input type='text' ref={inputRef} />
        <h1>Adfar Rasheed</h1>
      <button onClick={hanldeClick}>Click</button>
    </div>
  )
}

export default Buttons
