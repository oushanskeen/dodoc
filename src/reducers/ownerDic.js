//import {state} from '../state.js';
import { store } from "../index";
import {
  OWNERDIC_SELECT,
  OWNERDIC_CREATE,
  OWNERDIC_UPDATE,
  OWNERDIC_DELETE,
  GET_OWNER_STARTED,
  GET_OWNER_SUCCESS,
  GET_OWNER_FAILED,
  POST_OWNER_STARTED,
  POST_OWNER_SUCCESS,
  POST_OWNER_FAILED,
  PUT_OWNER_STARTED,
  PUT_OWNER_SUCCESS,
  PUT_OWNER_FAILED,
  DELETE_OWNER_STARTED,
  DELETE_OWNER_SUCCESS,
  DELETE_OWNER_FAILED
  //GET_DIC_STARTED,
  //GET_DIC_SUCCESS,
  //GET_DIC_FAILED
} from "../constants/actionTypes";
import * as actionTypes from "../constants/actionTypes";
import * as actions from "../actions/index";
const trimMongoReturn = require('../utils/trimMongoReturn');
const initialState = (window.Cypress && window.initialState) || {
  data: [],
  /* 
  [ 
    {
    id:0,
    type:"YL",
    name: "OWNER ID:0 TYPE:YL COMP_FULL_NAME",
    compFullName:"OWNER ID:0 TYPE:YL COMP_FULL_NAME",
    compShortName: "OWNER ID:0 TYPE:YL COMP_SHORT_NAME",
    FIO:"OWNER ID:0 TYPE:YL FIO", 
    INN:"OWNER ID:0 TYPE:YL INN",
    KPP:"OWNER ID:0 TYPE:YL KPP",
    OGRN:"OWNER ID:0 TYPE:YL OGRN",
    OKPO:"OWNER ID:0 TYPE:YL OKPO",
    GosRegDate:"OWNER ID:0 TYPE:YL GOS_REG_DATE",
    YurAdress:"OWNER ID:0 TYPE:YL YUR_ADRESS",
    FactAdress:"OWNER ID:0 TYPE:YL FACT_ADRESS",
    GenDirector:"OWNER ID:0 TYPE:YL GEN_DIRECTOR",
    Buhgalter:"OWNER ID:0 TYPE:YL BUHGALTER",
    tel:"OWNER ID:0 TYPE:YL TEL",
    bankName:"OWNER ID:0 TYPE:YL BANK_NAME",
    BIK:"OWNER ID:0 TYPE:YL BIK",
    RS:"OWNER ID:0 TYPE:YL RS",
    KS:"OWNER ID:0 TYPE:YL KS",
    signature: "OWNER ID:0 TYPE:YL SIGNATURE"
  },
  {
    id:1,
    type:"IP",
    name: "OWNER ID:1 TYPE:IP FULL_NAME",
    FullName:"OWNER ID:1 TYPE:IP FULL_NAME",
    ShortName: "OWNER ID:1 TYPE:IP SHORT_NAME",
    FIO:"OWNER ID:1 TYPE:IP FIO",
    INN:"OWNER ID:1 TYPE:IP INN",
    OGRNIP:"OWNER ID:1 TYPE:IP OGRNIP",
    OGRNIPDate:"OWNER ID:1 TYPE:IP OGRNIP_DATE",
    OKPO:"OWNER ID:1 TYPE:IP ОКРО",
    YurAdress:"OWNER ID:1 TYPE:IP YUR_ADRESS",
    FactAdress:"OWNER ID:1 TYPE:IP FACT_ADRESS",
    bankName:"OWNER ID:1 TYPE:IP BANK_NAME",
    BIK:"OWNER ID:1 TYPE:IP BIK",
    RS:"OWNER ID:1 TYPE:IP RS",
    KS:"OWNER ID:1 TYPE:IP KS",
    signature: "OWNER ID:1 TYPE:IP SIGNATURE"
  },
  {
    id:2,
    type:"FL",
    name: "OWNER ID:2 TYPE:FL NAME_INFORMAL",
    NameInformal:"OWNER ID:2 TYPE:FL NAME_INFORMAL",
    lastName:"OWNER ID:2 TYPE:FL LAST_NAME",
    firstName:"OWNER ID:2 TYPE:FL FIRST_NAME",
    midName:"OWNER ID:2 TYPE:FL MID_NAME",
    docType:"OWNER ID:2 TYPE:FL DOC_TYPE",
    Serial:"OWNER ID:2 TYPE:FL SERIAL",
    number:"OWNER ID:2 TYPE:FL NUMBER",
    whoGave:"OWNER ID:2 TYPE:FL WHO_GAVE",
    whenGave:"OWNER ID:2 TYPE:FL WHEN_GAVE",
    codeGave:"OWNER ID:2 TYPE:FL CODE_GAVE",
    addressGave:"OWNER ID:2 TYPE:FL ADRESS_GAVE",
    signature: "OWNER ID:2 TYPE:FL SIGNATURE"
  }
  ],
 */

  ownerIsLoading: false,
  error: ""
};

/*const trimMongoReturn = obj => {
  const trimmed = { ...obj };
  delete trimmed["_id"];
  delete trimmed["__v"];
  return trimmed;
};*/

//---------------------------------------------------------------------

export default function(state = initialState, action) {
  switch (action.type) {
    case OWNERDIC_CREATE:
    case OWNERDIC_UPDATE:
    case OWNERDIC_DELETE:
      return { ...state };
    case GET_OWNER_STARTED:
    case POST_OWNER_STARTED:
    case PUT_OWNER_STARTED:
    case DELETE_OWNER_STARTED:
      return {
        data: [...state.data],
        ownerIsLoading: true
      };
    case GET_OWNER_SUCCESS:
      return {
        data: [...action.payload],
        ownerIsLoading: false,
        error: null
      };
    case POST_OWNER_SUCCESS:
      return {
        data: [...state.data, { ...trimMongoReturn(action.payload) }],
        ownerIsLoading: false,
        error: null
      };
    case GET_OWNER_FAILED:
    case POST_OWNER_FAILED:
    case PUT_OWNER_FAILED:
    case DELETE_OWNER_FAILED:
      return {
        data: [...state.data],
        ownerIsLoading: false,
        error: [action.payload.error, action.payload]
      };
    case PUT_OWNER_SUCCESS:
      return {
        data: state.data.map(e =>
          e.id === action.payload.id
            ? { ...trimMongoReturn(action.payload) }
            : e
        ),
        ownerIsLoading: false,
        error: null
      };
    case DELETE_OWNER_SUCCESS:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.payload.message)
      };
    default:
      return state;
  }
}
