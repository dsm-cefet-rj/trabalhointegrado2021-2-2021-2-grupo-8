import { createStore } from 'redux';
import { combineReducers } from './reducers/combine';


const store = createStore(combineReducers);

export default store;