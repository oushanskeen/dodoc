  import * as types from "../../constants/actionTypes";
  import axios from 'axios';
  import { store } from '../../index';

//  CONTENT -----------------------------------------------------------

// index.imports
import * as apiActionsIndex from './apiActions.index'; 

// "a" -> {type:"OWNERDIC_CREATE", payload:"a"};
export const ownerDicCreate = (_data) => {
  store.dispatch(apiActionsIndex.postOwner(_data));
  console.log({type:types.OWNERDIC_CREATE,payload:_data});
  return {type:types.OWNERDIC_CREATE, payload: _data};
  };
// "a" -> {type:"OWNERDIC_UPDATE", payload:"a"};
export const ownerDicUpdate = (_data) => {
  store.dispatch(apiActionsIndex.putOwner(_data));
  console.log({type:types.OWNERDIC_UPDATE,payload:_data});
  return {type:types.OWNERDIC_UPDATE, payload: _data};
  };
// "a" -> {type:"OWNERDIC_DELETE", payload:"a"};
  export const ownerDicDelete = (_data) => {
  store.dispatch(apiActionsIndex.deleteOwner(_data));
  console.log({type:types.OWNERDIC_DELETE,payload:_data});
  return {type:types.OWNERDIC_DELETE, payload: _data};
  };

