import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './reduxTool/CounterSlice';
import { setUser,updateAge } from './reduxTool/userSlice';
function App() {
  const count = useSelector(state=>state.counter.value);
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Count : {count}</h1>
     <button onClick={()=>dispatch(increment())}>Increment</button>
     <button onClick={()=>dispatch(decrement())}>Decrement</button>
     <h1>my name is {user.name} and my age is  {user.age}</h1>
     <button onClick={()=>dispatch(setUser({name:"adfar",age:0}))}>Set USer</button>
     <button onClick={()=>dispatch(updateAge(24))}>SetAGe</button>
    </div>
  )
}

export default App
