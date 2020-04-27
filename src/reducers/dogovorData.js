import {state} from '../state.js';
import {
    DOGOVOR_DATA,
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
{
    selectors:{objNameSel:"-",dogTypeSel:"-",sysTypeSel: "-",servTypeSel: "-",clientTypeSel: "-",hub: {}},
    formData:{
        NameInformal:"-",
        lastName:"-",
        firstName:"-",
        midName:"-",
        docType:"-",
        Serial:"-",
        number:"-",
        whoGave:"-",
        whenGave:"-",
        codeGave:"-",
        addressGave:"-"
    }
};

export default function(state = initialState,action){
    switch (action.type){
        case DOGOVOR_DATA:
            return action.payload;
        default:        
            return state;
    };
};

