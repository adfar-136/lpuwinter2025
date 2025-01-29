import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./CounterSlice";
import userReducer from "./userSlice"

const storeee = configureStore({
    reducer: {
        counter:countReducer,
        user:userReducer
    }
})
export default storeee