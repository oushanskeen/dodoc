//import {state} from '../state.js';
import {
    DOGDIC_SELECT,
    DOGDIC_CREATE,
    DOGDIC_UPDATE,
    DOGDIC_DELETE
} from '../constants/actionTypes'

const initialState = (window.Cypress && window.initialState) ||
[
  {
    id:0, 
    name:"DOGOVOR ID:0 TYPE:PROJECT DATE",
    date: "DOGOVOR ID:0 DATE",
    objName:"OBJECT ID:0 OBJECT_NAME",
    objId: 0,
    ownerName: "OWNER ID:0 TYPE:YL COMP_FULL_NAME",
    ownerId: 0,
    agentName: "AGENT ID:0 TYPE:YL COMP_FULL_NAME",
    agentId: 0,
    dogovorType:"Проектирование",
    systems:"вентиляция и кондиционирование",
    price: "DOGOVOR ID:0 PRICE"
  },
  { 
    id:1,           
    name:"DOGOVOR ID:1 TYPE:DELIVER DATE",
    date: "DOGOVOR ID:1 DATE",
    objName:"OBJECT ID:1 OBJECT_NAME",
    objId: 1,
    ownerName: "OWNER ID:1 TYPE:IP FULL_NAME",
    ownerId: 1,
    agentName: "AGENT ID:1 TYPE:IP FULL_NAME",
    agentId: 1,
    dogovorType:"Поставка",
    systems: "вентиляция и кондиционирование,отопление",
    price: "DOGOVOR ID:1 PRICE"
  },
  { 
    id:2, 
    name:"DOGOVOR ID:2 TYPE:DELIVER DATE",
    date: "DOGOVOR ID:2 DATE",
    objName:"OBJECT ID:2 OBJECT_NAME",
    objId: 2,
    ownerName: "OWNER ID:2 TYPE:FL NAME_INFORMAL",
    ownerId: 2,
    agentName: "AGENT ID:2 TYPE:FL NAME_INFORMAL",
    agentId: 2,
    dogovorType:"Поставка",
    systems:"вентиляция и кондиционирование,отопление,котельная",
    price: "DOGOVOR ID:2 PRICE"
  }
];

//---------------------------------------------------------------------

export default function(state = initialState,action){
  switch (action.type){
    case DOGDIC_CREATE:
      return [...state,{...action.payload}];
    case DOGDIC_UPDATE:
      return state.map(e => 
        e.id===action.payload.id ? action.payload : e);
    case DOGDIC_DELETE:
      return state.filter(e => e.id != action.payload);
    default:        
      return state;
    };
};

