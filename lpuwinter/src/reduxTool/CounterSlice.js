import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {value:0},
    reducers: {
        increment:(state,action)=>{
            state.value += 1;
        },
        decrement:(state,action)=>{
            state.value -= 1;
        }
    }
})
export default counterSlice.reducer;
export const {increment,decrement} = counterSlice.actions;  //exporting the actions to