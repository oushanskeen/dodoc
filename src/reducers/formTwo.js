import {state} from '../state.js';
import {
    ZAKAZCHIK_TYPETWO_DATA
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
state.formData;

export default function(state = initialState,action){
    switch (action.type){
        case ZAKAZCHIK_TYPETWO_DATA:
            return { zakazchikTypeTwoData: action.payload };
        default:        
            return state;
    };
};

