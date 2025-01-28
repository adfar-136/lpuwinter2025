import React, { useState } from 'react'

function Controlled() {
    const [data,setData] = useState({
        name:"",
        email:"",
        pass:""
    })
    const [condition,setCondition] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
       localStorage.setItem("name",data.name);
       localStorage.setItem("email",data.email);
       localStorage.setItem("pass",data.pass);
       setData({
        name:"",
        email:"",
        pass:""
       })
         
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Username' 
        value={data.name} onChange={(e)=>setData((prev)=>({...prev,name:e.target.value}))}/><br/><br/>
        <input type='email' placeholder='Enter Email' 
        value={data.email} onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))}/><br/><br/>
        <input type='password' placeholder='Enter Password'
        value={data.pass} onChange={(e)=>setData((prev)=>({...prev,pass:e.target.value}))}/><br/><br/>
        <input type='submit' value="Signup"/>
        {/* {JSON.parse(localStorage.getItem("Data")).name}
        {JSON.parse(localStorage.getItem("Data")).email}
        {JSON.parse(localStorage.getItem("Data")).pass} */}
        
      </form>
      <button onClick={()=>localStorage.removeItem("name")}>Remove Name</button>
        <button onClick={()=>localStorage.removeItem("email")}>Remove Email</button>
        <button onClick={()=>localStorage.clear()}>Clear storage</button>
    </div>
  )
}

export default Controlled
