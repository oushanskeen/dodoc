//import {state} from '../state.js';
import {
    AGENTDIC_SELECT,
    AGENTDIC_CREATE,
    AGENTDIC_UPDATE,
    AGENTDIC_DELETE,
    GET_AGENT_STARTED,
    GET_AGENT_SUCCESS,
    GET_AGENT_FAILED,
    POST_AGENT_STARTED,
    POST_AGENT_SUCCESS,
    POST_AGENT_FAILED,
    PUT_AGENT_STARTED,
    PUT_AGENT_SUCCESS,
    PUT_AGENT_FAILED,
    DELETE_AGENT_STARTED,
    DELETE_AGENT_SUCCESS,
    DELETE_AGENT_FAILED,
} from '../constants/actionTypes'
//const trimMongoReturn = require('../utils/trimMongoReturn').trimMongoReturn;
const trimMongoReturn = obj => {
  const trimmed = { ...obj };
  delete trimmed["_id"];
  delete trimmed["__v"];
  return trimmed;
};

const initialState = (window.Cypress && window.initialState) ||
{data:[],
  /*
  {
    id:0,
    type:"YL",
    name: "AGENT ID:0 TYPE:YL COMP_FULL_NAME",
    compFullName:"AGENT ID:0 TYPE:YL COMP_FULL_NAME",
    compShortName: "AGENT ID:0 TYPE:YL COMP_SHORT_NAME",
    FIO:"AGENT ID:0 TYPE:YL FIO", 
    INN:"AGENT ID:0 TYPE:YL INN",
    KPP:"AGENT ID:0 TYPE:YL KPP",
    OGRN:"AGENT ID:0 TYPE:YL OGRN",
    OKPO:"AGENT ID:0 TYPE:YL OKPO",
    GosRegDate:"AGENT ID:0 TYPE:YL GOS_REG_DATE",
    YurAdress:"AGENT ID:0 TYPE:YL YUR_ADRESS",
    FactAdress:"AGENT ID:0 TYPE:YL FACT_ADRESS",
    GenDirector:"AGENT ID:0 TYPE:YL GEN_DIRECTOR",
    Buhgalter:"AGENT ID:0 TYPE:YL BUHGALTER",
    tel:"AGENT ID:0 TYPE:YL TEL",
    bankName:"AGENT ID:0 TYPE:YL BANK_NAME",
    BIK:"AGENT ID:0 TYPE:YL BIK",
    RS:"AGENT ID:0 TYPE:YL RS",
    KS:"AGENT ID:0 TYPE:YL KS",
    signature: "AGENT ID:0 TYPE:YL SIGNATURE"
  },               
  { 
    id:1,
    type:"IP",
    name: "AGENT ID:1 TYPE:IP FULL_NAME",
    FullName:"AGENT ID:1 TYPE:IP FULL_NAME",
    ShortName: "AGENT ID:1 TYPE:IP SHORT_NAME",
    FIO:"AGENT ID:1 TYPE:IP FIO",
    INN:"AGENT ID:1 TYPE:IP INN",
    OGRNIP:"AGENT ID:1 TYPE:IP OGRNIP",
    OGRNIPDate:"AGENT ID:1 TYPE:IP OGRNIP_DATE",
    OKPO:"AGENT ID:1 TYPE:IP ОКРО",
    YurAdress:"AGENT ID:1 TYPE:IP YUR_ADRESS",
    FactAdress:"AGENT ID:1 TYPE:IP FACT_ADRESS",
    bankName:"AGENT ID:1 TYPE:IP BANK_NAME",
    BIK:"AGENT ID:1 TYPE:IP BIK",
    RS:"AGENT ID:1 TYPE:IP RS",
    KS:"AGENT ID:1 TYPE:IP KS",
    signature: "AGENT ID:1 TYPE:IP SIGNATURE"
  },
  {
    id:2,
    type:"FL",
    name: "AGENT ID:2 TYPE:FL NAME_INFORMAL",
    NameInformal:"AGENT ID:2 TYPE:FL NAME_INFORMAL",
    lastName:"AGENT ID:2 TYPE:FL LAST_NAME",
    firstName:"AGENT ID:2 TYPE:FL FIRST_NAME",
    midName:"AGENT ID:2 TYPE:FL MID_NAME",
    docType:"AGENT ID:2 TYPE:FL DOC_TYPE",
    Serial:"AGENT ID:2 TYPE:FL SERIAL",
    number:"AGENT ID:2 TYPE:FL NUMBER",
    whoGave:"AGENT ID:2 TYPE:FL WHO_GAVE",
    whenGave:"AGENT ID:2 TYPE:FL WHEN_GAVE",
    codeGave:"AGENT ID:2 TYPE:FL CODE_GAVE",
    addressGave:"AGENT ID:2 TYPE:FL ADRESS_GAVE",
    signature: "AGENT ID:2 TYPE:FL SIGNATURE"
  }
  */
  agentIsLoading: false,
  error: ""
};


export default function(state = initialState,action){
  switch (action.type){
    case AGENTDIC_CREATE:
    case AGENTDIC_UPDATE:
    case AGENTDIC_DELETE:
        return { ...state };
    case GET_AGENT_STARTED:
    case POST_AGENT_STARTED:
    case PUT_AGENT_STARTED:
    case DELETE_AGENT_STARTED:
      console.log('state in agents: ', state);
      return {
        data: [...state.data],
        agentIsLoading: true
      };
    case GET_AGENT_SUCCESS:
      return {
        data: [...action.payload],
        agentIsLoading: false,
        error: null
      };
    case POST_AGENT_SUCCESS:
      return {
        data: [...state.data, 
          {...trimMongoReturn(action.payload)}
        ],
        agentIsLoading: false,
        error: null
    };
    case GET_AGENT_FAILED:
    case POST_AGENT_FAILED:
    case PUT_AGENT_FAILED:
    case DELETE_AGENT_FAILED:
      console.log(
        "action.payload in agents failes: ",
        action.payload
      );
      return {
        data: [...state.data,],
        agentIsLoading: false,
        error: [action.payload.error, action.payload]
      };
    case PUT_AGENT_SUCCESS:
      console.log("PUT_AGENT_SUCCESS ready to change state");
      return {
        data: state.data.map(e =>
          e.id === action.payload.id
          ? {...trimMongoReturn(action.payload)}
          : e
        ),
        agentIsLoading: false,
        error: null
      };
    case DELETE_AGENT_SUCCESS:
      return {...state,
        data: state.data.filter(e =>
          e.id !== action.payload.message
        )
      };
    default:        
      return state;
   };
};

