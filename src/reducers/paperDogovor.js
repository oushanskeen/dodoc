import {
  GET_PAPER_DOGOVOR,
  GET_PAPER_DOGOVOR_STARTED,
  GET_PAPER_DOGOVOR_SUCCESS,
  GET_PAPER_DOGOVOR_FAILED,
  GET_PAPER_DOGOVORS_LIST,
  GET_PAPER_DOGOVORS_LIST_STARTED,
  GET_PAPER_DOGOVORS_LIST_SUCCESS,
  GET_PAPER_DOGOVORS_LIST_FAILED,
  DOG_ON_SAVE_STATUS_TO_DEFAULT,
  SAVE_PAPER_DOGOVOR,
  SAVE_PAPER_DOGOVOR_STARTED,
  SAVE_PAPER_DOGOVOR_SUCCESS,
  SAVE_PAPER_DOGOVOR_FAILED,
  PRINT_PAPER_DOGOVOR
} from "../constants/actionTypes";
//import {ObjectFlags} from "typescript";
//const trimMongoReturn = require('../utils/trimMongoReturn');
const initialState = (window.Cypress && window.initialState) || {
  data: [],
  dogList: {},
  dogOnSaveStatus:"ON_QUIET",
  paperDogovorIsLoading: false,
  paperDogovorListIsLoading: false,
  error: null
};

const trimMongoReturn = obj => {
  const trimmed = { ...obj };
  delete trimmed["_id"];
  delete trimmed["__v"];
  return trimmed;
};

//---------------------------------------------------------------------

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PAPER_DOGOVOR:
    case GET_PAPER_DOGOVORS_LIST:
    case SAVE_PAPER_DOGOVOR:
    case PRINT_PAPER_DOGOVOR:
      return { ...state };
    case GET_PAPER_DOGOVOR_STARTED:
      return {...state, 
        paperDogovorIsLoading: true,
        error: null
      };
    case GET_PAPER_DOGOVORS_LIST_STARTED:
      return {...state, 
        paperDogovorListIsLoading: true,
        error: null
      }
    case GET_PAPER_DOGOVOR_SUCCESS:
      return {
        ...state, 
        //data: [...state.data, {...action.payload}],
        data:{...action.payload},
        paperDogovorIsLoading: false,
        error: null
      };
    case GET_PAPER_DOGOVORS_LIST_SUCCESS:
      const dogName = Object.keys(action.payload.data)[0];
      console.log(`PAPER DOG NAME: ${dogName}`);
      return {
        ...state, 
        dogList: {...state.dogList,
          [dogName]:action.payload["data"][dogName]},
        paperDogovorListIsLoading: false,
        error: null
      };
    case GET_PAPER_DOGOVOR_FAILED:
      return {...state, 
        paperDogovorIsLoading: false,
        error: [action.payload.error, action.payload]
      };
    case DOG_ON_SAVE_STATUS_TO_DEFAULT:
      return {...state,
        dogOnSaveStatus: "ON_QUIET"
      };
    case SAVE_PAPER_DOGOVOR_STARTED:
      console.log("SAVE_PAPER_DOGOVOR_STARTED");
      return {...state,
        dogOnSaveStatus: "ON_SAVE_STARTED"
      };
    case SAVE_PAPER_DOGOVOR_SUCCESS:
      console.log("SAVE_PAPER_DOGOVOR_SUCCESS");
      return {...state,
        dogOnSaveStatus: "ON_SAVE_SUCCESS"
      };
      console.log("SAVE_PAPER_DOGOVOR_FAILED");
    case SAVE_PAPER_DOGOVOR_FAILED:
      return {...state,
        dogOnSaveStatus: "ON_SAVE_FAILED"
      };
    default:
      return state;
  }
}
