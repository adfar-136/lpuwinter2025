const initialState = {
    name:"",
    email:"",
    password:""
}
const formReducer =(state=initialState,action)=>{
  switch(action.type){
    case "update":
        return {
            ...state,
            [action.payload.name]:action.payload.value
        }
    default:
        return state
  }
}
export default formReducer