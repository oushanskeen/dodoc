//import {state} from '../state.js';
import {
  DOGOVORDIC_CREATE,
  DOGOVORDIC_UPDATE,
  DOGOVORDIC_DELETE,
  GET_DOGOVOR_STARTED,
  GET_DOGOVOR_SUCCESS, 
  GET_DOGOVOR_FAILED,
  POST_DOGOVOR_STARTED,
  POST_DOGOVOR_SUCCESS,
  POST_DOGOVOR_FAILED,
  DELETE_DOGOVOR_STARTED,
  PUT_DOGOVOR_STARTED,
  PUT_DOGOVOR_FAILED,
  DELETE_DOGOVOR_FAILED,
  PUT_DOGOVOR_SUCCESS,
  DELETE_DOGOVOR_SUCCESS,
} from "../constants/actionTypes";
//const store = require('../index').store;

import {store} from '../index';
const initialState = (window.Cypress && window.initialState) || 
  {
    data:[],
    /*
    id: 0,
    name: "Договор проектирования №2019А04 от 15-апреля-2019",
    date: "15-апреля-2019",
    objName: "OBJECT ID:0 OBJECT_NAME",
    objId: 0,
    ownerName: "OWNER ID:0 TYPE:YL COMP_FULL_NAME",
    ownerId: 0,
    agentName: "AGENT ID:0 TYPE:YL COMP_FULL_NAME",
    agentId: 0,
    dogovorType: "Договор проектирования",
    systems: "вентиляция и кондиционирование",
    price: '200 (двести рублей)',
    srokDeistviya: '15-апреля-2019 / 15-августа-2019'
  },
  {
    id: 1,
    name: "Договор поставки №2018Б34 от 16-мая-2018",
    date: "16-мая-2018",
    objName: "OBJECT ID:1 OBJECT_NAME",
    objId: 1,
    ownerName: "OWNER ID:1 TYPE:IP FULL_NAME",
    ownerId: 1,
    agentName: "AGENT ID:1 TYPE:IP FULL_NAME",
    agentId: 1,
    dogovorType: "Договор поставки",
    systems: "вентиляция и кондиционирование,отопление",
    price: "300 (триста рублей)",
    srokDeistviya: '14-мая-2018 / 14-сентября-2018'
  },
  {
    id: 2,
    name: "Договор поставки №2020Б02 от 4-января-2020",
    date: "4-января-2020",
    objName: "OBJECT ID:2 OBJECT_NAME",
    objId: 2,
    ownerName: "OWNER ID:2 TYPE:FL NAME_INFORMAL",
    ownerId: 2,
    agentName: "AGENT ID:2 TYPE:FL NAME_INFORMAL",
    agentId: 2,
    dogovorType: "Договор поставки",
    systems: "вентиляция и кондиционирование,отопление,котельная",
    price: "400 (четыреста рублей)",
    srokDeistviya: '4-января-2020 / 4-апреля-2020'
  }
  */
  dogovorIsLoading: false,
  error: ""
};

const trimMongoReturn = (obj) => {
  const trimmed = {...obj};
  delete trimmed['_id'];
  delete trimmed['__v'];
  return trimmed;
}

//--------------------------------------------------------------------

export default function(state = initialState, action) {
  console.log("state in dogovor reducer : ", state);
  switch (action.type) {
    case DOGOVORDIC_CREATE:
    case DOGOVORDIC_UPDATE:
    case DOGOVORDIC_DELETE:
      return {...state};
    case GET_DOGOVOR_STARTED:
    case POST_DOGOVOR_STARTED:
    case PUT_DOGOVOR_STARTED:
    case DELETE_DOGOVOR_STARTED:
      return {
        data: [...state.data],
        dogovorIsLoading:true,
        error: ""
      };
    case GET_DOGOVOR_SUCCESS:
      //console.log(
      // `store : ${state},
      // `
       //agent data : ${state.agentDic.data.map(e => JSON.stringify(e))}
        
     // );
      return {
        //data: [...action.payload],
        data: action.payload.map(e => ({
          agentId: e.agentId,
          agentName: 'stubAgentName',
          date: e.date,
          dogovorType: e.dogovorType,
          id: e.id,
          name: e.name,
          objId: e.objId,
          objName: "stubObjectName",
          ownerId: e.ownerId,
          ownerName: "stubOwnerName",
          price: e.price,
          srokDeistviya: e.srokDeistviya,
          systems: e.systems,
        })
        ),
        dogovorIsLoading: false,
        error: null
      };
    case POST_DOGOVOR_SUCCESS:
      return {
        data: [...state.data, {...trimMongoReturn(action.payload)}],
        dogovorIsLoading: false,
        error: null
      };
    case PUT_DOGOVOR_SUCCESS:
      return{
        ...state,
        data: state.data.map(e =>
          e.name === action.payload.name
          ? {...trimMongoReturn(action.payload)}
          : e) 
      };
    case DELETE_DOGOVOR_SUCCESS:
      return {
        ...state, 
        data: state.data.filter(e =>
          e.id !== action.payload.message)
      };
    case GET_DOGOVOR_FAILED:
    case POST_DOGOVOR_FAILED:
    case PUT_DOGOVOR_FAILED:
    case DELETE_DOGOVOR_FAILED:
      return {
        data: [...state.data],
        dogovorIsLoading: false,
        error: [action.payload.error, action.payload]
      };
    default:
      return state;
  }
}
