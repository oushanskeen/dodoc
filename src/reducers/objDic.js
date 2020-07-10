//import {state} from '../state.js';
import {
  OBJDIC_SELECT,
  OBJDIC_CREATE,
  OBJDIC_UPDATE,
  OBJDIC_DELETE,
  GET_OBJECT_STARTED,
  GET_OBJECT_SUCCESS,
  GET_OBJECT_FAILED,
  POST_OBJECT_STARTED,
  POST_OBJECT_SUCCESS,
  POST_OBJECT_FAILED,
  PUT_OBJECT_STARTED,
  PUT_OBJECT_SUCCESS,
  PUT_OBJECT_FAILED,
  DELETE_OBJECT_STARTED,
  DELETE_OBJECT_SUCCESS,
  DELETE_OBJECT_FAILED
} from "../constants/actionTypes";

const initialState = (window.Cypress && window.initialState) || 
  {data:[
    {
      id: 0,
      name: "OBJECT ID:0 OBJECT_NAME",
      adress: "OBJECT ID:0 OBJECT_NAME ADRESS",
      contactsFIO: "OBJECT ID:0 OBJECT_NAME CONTACTS_FIO",
      //contactsRole: "OBJECT ID:0 OBJECT_NAME CONTACTS_ROLE",
      //contactsContacts: "OBJECT ID:0 OBJECT_NAME CONTACTS_CONTACTS",
      workRegime: "OBJECT ID:0 OBJECT_NAME SCHEDULE"
    }
    ],
  /*
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
  */
  objectIsLoading: false,
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OBJDIC_CREATE:
    case OBJDIC_UPDATE:
    case OBJDIC_DELETE:  
      return {...state};
    case GET_OBJECT_STARTED:
    case POST_OBJECT_STARTED:
    case PUT_OBJECT_STARTED:
    case DELETE_OBJECT_STARTED:
      console.log("state in object reducer: ", state);
      return {
        ...state,
        data: [action.payload],
        objectIsLoading: true
      };
    case GET_OBJECT_SUCCESS:
      return {
        data: [...action.payload],
        objectIsLoading: false,
        error: null
      };
    case GET_OBJECT_FAILED:
      return {
        data: [...state.data],
        objectIsLoading: false,
        error: [action.payload.error, action.payload]
      };
    default:
      return state;
  }
}
