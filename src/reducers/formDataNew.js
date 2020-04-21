import {state} from '../state.js';
import {
    FORM_DATA_NEW
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
state.formData;

export default function(state = initialState,action){
    switch (action.type){
        case FORM_DATA_NEW:
            return {clientType:action.payload.clientType, data:action.payload.data};
        default:        
            return state;
    };
};
