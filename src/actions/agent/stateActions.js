  import * as types from "../../constants/actionTypes";
  import axios from 'axios';
  import { store } from '../../index';

//  CONTENT -----------------------------------------------------------

// index.imports
import * as apiActionsIndex from './apiActions.index'; 

// "a" -> {type:"OWNERDIC_CREATE", payload:"a"};
export const agentDicCreate = (_data) => {
  store.dispatch(apiActionsIndex.postAgent(_data));
  console.log({type:types.AGENTDIC_CREATE,payload:_data});
  return {type:types.AGENTDIC_CREATE, payload: _data};
  };
// "a" -> {type:"OWNERDIC_UPDATE", payload:"a"};
export const agentDicUpdate = (_data) => {
  store.dispatch(apiActionsIndex.putAgent(_data));
  console.log({type:types.AGENTDIC_UPDATE,payload:_data});
  return {type:types.AGENTDIC_UPDATE, payload: _data};
  };
// "a" -> {type:"OWNERDIC_DELETE", payload:"a"};
  export const agentDicDelete = (_data) => {
  store.dispatch(apiActionsIndex.deleteAgent(_data));
  console.log({type:types.AGENTDIC_DELETE,payload:_data});
  return {type:types.AGENTDIC_DELETE, payload: _data};
  };

