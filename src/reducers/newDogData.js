import {state} from '../state.js';
import {
    DOGOVOR_DATA,
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
state;

export default function(state = initialState,action){
    switch (action.type){
        case DOGOVOR_DATA:
            return { ...dogovorData, [action.payload.sendmen]:action.payload.data };
        default:        
            return state;
    };
};

