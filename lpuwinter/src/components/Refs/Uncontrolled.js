import React, { useRef, useState } from 'react'

function Uncontrolled() {
    const fname = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
   const [allow,setAllow] = useState(false)
    function submitForm(e) {
        e.preventDefault()
        setAllow(true)
       console.log(fname.current.value)
       console.log(email.current.value)
       console.log(password.current.value)
    }
  return (
    <div>
      <form onSubmit={submitForm}>
        <label>Username :</label>
        <input type="text" ref={fname}/> <br/>
        <label>email :</label>
        <input type="email" ref={email}/> <br/>
        <label>Password :</label>
        <input type="password" ref={password}/> <br/>
        <input type="submit" value="Submit"/>
      </form>
      
      {allow && <p>Form submitted {fname.current.value}</p>}
    </div>
  )
}

export default Uncontrolled
