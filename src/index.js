import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers'; 
import App from './App';

const store = createStore(reducer);
console.log("store while initialise in index.js : ", store.getState());

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
