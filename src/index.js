import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,  applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers'; 
import App from './App';
//import store from './store';
import thunk from 'redux-thunk';

export const store = createStore(reducer, applyMiddleware(thunk));
console.log("store while initialise in index.js : ", 
  store.getState()
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

if (window.Cypress) {
    window.store = store;
}
