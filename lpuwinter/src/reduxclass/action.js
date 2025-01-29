// export const increment =()=>{
//     return {
//         type: 'INCREMENT'
//     }
// }
// export const decrement =()=>{
//     return {
//         type: 'DECREMENT'
//     }
// }

export const increment =(amount)=>{
    return (dispatch)=>{
       dispatch({
        type: 'INCREMENT',
        payload: amount
       })
    }
}
export const decrement =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'DECREMENT',
            payload: amount
        })
    }
}