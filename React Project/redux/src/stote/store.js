import { createStore } from "redux";
import counterReducer from "../Reducer/reducer";

let store =createStore(counterReducer)

export default store