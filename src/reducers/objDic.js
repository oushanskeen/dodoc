//import {state} from '../state.js';
import {
    OBJDIC_SELECT,
    OBJDIC_CREATE
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
{
    "currentDic":"some dic",
    "dics": 
        [
            { 
                id:0, 
                name:"Липки",
                data:
                    {
                        name:"Пипки",
                        adress:"не совсем там",
                        contactsFIO:"FIO",
                        contactsRole:"role",
                        contactsContacts:"contatcs",
                        workRegime: "пропускной режим"
                    }                
            },
            {
               id:1, 
                name:"Пипки",
                data:
                    {
                        name:"Пипки",
                        adress:"не совсем там",
                        contactsFIO:"FIO",
                        contactsRole:"role",
                        contactsContacts:"contatcs",
                        workRegime: "пропускной режим"
                    }                
            }
        ]
};


export default function(state = initialState,action){
    switch (action.type){
        case OBJDIC_SELECT:
            return {...state,"currentDic":action.payload};
        case OBJDIC_CREATE:
            const out = {...state,
                dics:[...state.dics,
                    {id:(state.dics[state.dics.length-1].id)+1,
                     name:Object.entries(action.payload)[0][1],
                     data:action.payload
                    }
                ]
            }; 
            console.log("OBJDIC_SELECT out : ", out);
            return out;
        default:        
            return state;
    };
};

