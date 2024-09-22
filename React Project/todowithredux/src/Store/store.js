import {createStore} from 'redux'
import todoReducer from '../Reducer/Reducer';
let store = createStore(todoReducer)

export default store;

