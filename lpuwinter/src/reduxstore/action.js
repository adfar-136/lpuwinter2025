export const increment =(amount)=>{
    return {
        type: 'INCREMENT',
        payload:amount
    }
}
export const decrement =(amount)=>{
    return {
        type: 'DECREMENT',
        payload:amount
    }
}

export const setBgColor = (color)=>{
    return {
        type:"setbgcolor",
        payload:color
    }
}
export const updateFeild = (feildname,value)=>{
     return {
        type:"update",
        payload:{feildname,value}
     }
}