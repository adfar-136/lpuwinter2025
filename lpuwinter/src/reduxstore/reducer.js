const countReducer = (state={count:0},action)=>{
    console.log(action)
  switch(action.type){
    case "INCREMENT":
        return {count:state.count+action.payload}
    case "DECREMENT":
        return {count:state.count-action.payload}
    default:
        return state;
  }
}
export default countReducer