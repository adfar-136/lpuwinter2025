// const countReducer  =(state=0,action)=>{
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state;
//     }
    
// }
// export default countReducer

const countReducer  =(state=0,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
    
}
export default countReducer