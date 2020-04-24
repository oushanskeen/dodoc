import {createStore} from 'redux';
import reducer from './reducers'; 

const store = createStore(reducer);
console.log("store while initialise in index.js : ", store.getState());

export default store;

