

import * as types from "../constants/actionTypes";
//import {errors} from "puppeteer";
//import axios from 'axios';
//import { store } from '../index';
import * as ownerApiActionsIndex from './owner/apiActions.index.js';
import * as ownerStateActions from './owner/stateActions.js';
import * as agentApiActionsIndex from './agent/apiActions.index.js';
import * as agentStateActions from './agent/stateActions.js';

// MISC -----------------------------------------------------------

export const dogDicCreate = (data) => {
  console.log({type:types.DOGDIC_CREATE, payload:data});
  return {type: types.DOGDIC_CREATE, payload:data};
};
expiport const dogovorData = (data) => {
  console.log({type: types.DOGOVOR_DATA, payload: data});
  return {type: types.DOGOVOR_DATA, payload: data};
};
export const formDataNew = (data) => {  
  console.log({type: types.FORM_DATA_NEW, payload: data});
  return {type: types.FORM_DATA_NEW, payload: data};
};

// OWNER ----------------------------------------------------------
export const getOwner = ownerApiActionsIndex.getOwner;
export const postOwner = ownerApiActionsIndex.postOwner;
export const putOwner = ownerApiActionsIndex.putOwner;
export const deleteOwner = ownerApiActionsIndex.deleteOwner;
export const ownerDicCreate = ownerStateActions.ownerDicCreate;
export const ownerDicUpdate = ownerStateActions.ownerDicUpdate;
export const ownerDicDelete = ownerStateActions.ownerDicDelete;

// AGENT -----------------------------------------------------------
export const getAgent = agentApiActionsIndex.getAgent;
export const postAgent = agentApiActionsIndex.postAgent;
export const putAgent = agentApiActionsIndex.putAgent;
export const deleteAgent = agentApiActionsIndex.deleteAgent;
export const agentDicCreate = agentStateActions.agentDicCreate;
export const agentDicUpdate = agentStateActions.agentDicUpdate;
export const agentDicDelete = agentStateActions.agentDicDelete;

