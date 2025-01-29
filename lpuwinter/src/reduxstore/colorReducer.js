const colorReducer = (state={backgroundColor:"red"},action)=>{
    switch(action.type){
        case "setbgcolor":
            return {backgroundColor:action.payload};
        default:
            return state
    }

}
export default colorReducer;