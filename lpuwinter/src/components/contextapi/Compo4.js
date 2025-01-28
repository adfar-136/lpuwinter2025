import React, { useContext } from 'react'
import { fname,lname } from '../../App'
export default function Compo4() {
    let firstname = useContext(fname)
   let lastname = useContext(lname)
  return (
    <div>
      <h1>I am a compo4</h1>
      <h1>My name is {firstname} {lastname}</h1>
      {/* {<fname.Consumer>
          {(fname)=>(<lname.Consumer>
            {(lname)=>(<h1>My name is {fname} {lname}</h1>)}
          </lname.Consumer>)}       
     </fname.Consumer>} */}
    </div>
  )
}
