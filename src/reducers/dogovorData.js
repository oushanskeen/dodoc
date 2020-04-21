import {state} from '../state.js';
import {
    DOGOVOR_DATA,
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
state.dogovorData;

export default function(state = initialState,action){
    switch (action.type){
        case DOGOVOR_DATA:
            return action.payload;
        default:        
            return state;
    };
};

