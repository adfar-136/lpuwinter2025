import { combineReducers, createStore } from "redux";
import countReducer from "./reducer";
import colorReducer from "./colorReducer";
import formReducer from "./formReducer";
const reducers = combineReducers({
    counter:countReducer,
    bgColor:colorReducer,
    formData:formReducer
})
const store = createStore(reducers)

export default store