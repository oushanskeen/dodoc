//import {state} from '../state.js';
import {
    OBJDIC_SELECT,
    OBJDIC_CREATE
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
[
  {  
    id:0,
    name:"OBJECT ID:0 OBJECT_NAME",
    adress:"OBJECT ID:0 OBJECT_NAME ADRESS",
    contactsFIO:"OBJECT ID:0 OBJECT_NAME CONTACTS_FIO",
    contactsRole:"OBJECT ID:0 OBJECT_NAME CONTACTS_ROLE",
    contactsContacts:"OBJECT ID:0 OBJECT_NAME CONTACTS_CONTACTS",
    workRegime: "OBJECT ID:0 OBJECT_NAME SCHEDULE"
  },
  {
    id:1,
    name:"OBJECT ID:1 OBJECT_NAME",
    adress:"OBJECT ID:1 OBJECT_NAME ADRESS",
    contactsFIO:"OBJECT ID:1 OBJECT_NAME CONTACTS_FIO",
    contactsRole:"OBJECT ID:1 OBJECT_NAME CONTACTS_ROLE",
    contactsContacts:"OBJECT ID:1 OBJECT_NAME CONTACTS_CONTACTS",
    workRegime: "OBJECT ID:1 OBJECT_NAME SCHEDULE"               
  },
  {
    id:2,
    name:"OBJECT ID:2 OBJECT_NAME",
    adress:"OBJECT ID:2 OBJECT_NAME ADRESS",
    contactsFIO:"OBJECT ID:2 OBJECT_NAME CONTACTS_FIO",
    contactsRole:"OBJECT ID:2 OBJECT_NAME CONTACTS_ROLE",
    contactsContacts:"OBJECT ID:2 OBJECT_NAME CONTACTS_CONTACTS",
    workRegime: "OBJECT ID:2 OBJECT_NAME SCHEDULE"
  }     
];


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

