import React from 'react'
import { updateFeild } from './reduxstore/action'
import { useDispatch, useSelector } from 'react-redux'
function FormRedux() {
    const data = useSelector(state=>state.formData);
    const dispatch = useDispatch()
    console.log(data)
    function handleChange(e){
        dispatch(updateFeild(e.target.name,e.targ.value))
    }
  return (
    <div>
      <form>
        <input type="text" name='name' placeholder='Enter Name' onChange={handleChange}/>;
        <input type="email" name='email' placeholder='Enter Email' onChange={handleChange}/>
        <input type="password" name='password' placeholder='Enter Password' onChange={handleChange}/>
      </form>
    </div>
  )
}

export default FormRedux
