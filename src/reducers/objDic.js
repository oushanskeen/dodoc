//import {state} from '../state.js';
import {
  OBJDIC_SELECT,
  OBJDIC_CREATE,
  OBJDIC_UPDATE,
  OBJDIC_DELETE
} from "../constants/actionTypes";

const initialState = (window.Cypress && window.initialState) || [
  {
    id: 0,
    name: "OBJECT ID:0 OBJECT_NAME",
    adress: "OBJECT ID:0 OBJECT_NAME ADRESS",
    contactsFIO: "OBJECT ID:0 OBJECT_NAME CONTACTS_FIO",
    //contactsRole: "OBJECT ID:0 OBJECT_NAME CONTACTS_ROLE",
    //contactsContacts: "OBJECT ID:0 OBJECT_NAME CONTACTS_CONTACTS",
    workRegime: "OBJECT ID:0 OBJECT_NAME SCHEDULE"
  },
  {
    id: 1,
    name: "OBJECT ID:1 OBJECT_NAME",
    adress: "OBJECT ID:1 OBJECT_NAME ADRESS",
    contactsFIO: "OBJECT ID:1 OBJECT_NAME CONTACTS_FIO",
    //contactsRole: "OBJECT ID:1 OBJECT_NAME CONTACTS_ROLE",
    //contactsContacts: "OBJECT ID:1 OBJECT_NAME CONTACTS_CONTACTS",
    workRegime: "OBJECT ID:1 OBJECT_NAME SCHEDULE"
  },
  {
    id: 2,
    name: "OBJECT ID:2 OBJECT_NAME",
    adress: "OBJECT ID:2 OBJECT_NAME ADRESS",
    contactsFIO: "OBJECT ID:2 OBJECT_NAME CONTACTS_FIO",
    //contactsRole: "OBJECT ID:2 OBJECT_NAME CONTACTS_ROLE",
    //contactsContacts: "OBJECT ID:2 OBJECT_NAME CONTACTS_CONTACTS",
    workRegime: "OBJECT ID:2 OBJECT_NAME SCHEDULE"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case OBJDIC_SELECT:
      return { ...state, currentDic: action.payload };
    case OBJDIC_CREATE:
      return [...state, { ...action.payload }];
    case OBJDIC_UPDATE:
      return state.map(e => (e.id === action.payload.id ? action.payload : e));
    case OBJDIC_DELETE:
      return state.filter(e => e.id != action.payload);
    default:
      return state;
  }
}
