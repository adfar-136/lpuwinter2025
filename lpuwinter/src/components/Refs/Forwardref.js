import React, { useRef } from 'react'
import ChildButton from './ChildButton'

function Forwardref() {
    const btnRef = useRef(null)
    function hanldeClick(){
        console.log(btnRef)
        btnRef.current.textContent = "CLiked"
    }
  return (
    <div>
      <ChildButton ref={btnRef} onclick={hanldeClick}>
        Click
      </ChildButton>
    </div>
  )
}

export default Forwardref
