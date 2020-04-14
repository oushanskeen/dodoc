import {state} from '../state.js';
import {
    ZAKAZCHIK_TYPEONE_DATA
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
state.formData;

export default function(state = initialState,action){
    switch (action.type){
        case ZAKAZCHIK_TYPEONE_DATA:
            return { zakazchikTypeOneData: action.payload };
        default:        
            return state;
    };
};

