import {
  SAVE_PAPER_DOGOVOR,
  SAVE_PAPER_DOGOVOR_STARTED,
  SAVE_PAPER_DOGOVOR_SUCCESS,
  SAVE_PAPER_DOGOVOR_FAILED,
  PRINT_PAPER_DOGOVOR
} from "../constants/actionTypes";
//const trimMongoReturn = require('../utils/trimMongoReturn');
const initialState = (window.Cypress && window.initialState) || {
  data: [],
  dogOnSaveStatus:"ON_QUIET",
  ownerIsLoading: false,
  error: ""
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
    case SAVE_PAPER_DOGOVOR:
    case PRINT_PAPER_DOGOVOR:
      return { ...state };
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
