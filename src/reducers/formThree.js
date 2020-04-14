import {state} from '../state.js';
import {
    ZAKAZCHIK_TYPETHREE_DATA
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
state.formData;

export default function(state = initialState,action){
    switch (action.type){
        case ZAKAZCHIK_TYPETHREE_DATA:
            return { zakazchikTypeThreeData: action.payload };
        default:        
            return state;
    };
};

