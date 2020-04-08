import {state} from '../state.js';
import {
    YURLITSO,
    DOGOVOR_TYPE,
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
state;

export default function(state = initialState,action){
    switch (action.type){
        case YURLITSO:
            return { yurlitso: action.payload };
        case DOGOVOR_TYPE:
            return { dogovorType: action.payload };
        default:        
            return state;
    }
    return state;
};

