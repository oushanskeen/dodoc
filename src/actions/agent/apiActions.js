  import * as types from "../../constants/actionTypes";
  import axios from 'axios';
  import { store } from '../index';

//  CONTENT -----------------------------------------------------------

// GET OWNER -----------------------------------------------------------
export const getAgentStarted =(data) => {
  console.log({ type: types.GET_AGENT_STARTED, payload: data });
  return {type: types.GET_AGENT_STARTED};
  };
export const getAgentSuccess = (data) => {
  console.log({type: types.GET_AGENT_SUCCESS, payload: data});
  return {type: types.GET_AGENT_SUCCESS, payload: data};
  };
export const getAgentFailed = (error) => {
  console.log({type: types.GET_AGENT_FAILED, payload: error});
  return {type: types.GET_AGENT_FAILED, payload: error};
  };

// POST OWNER ---------------------------------------------------------
export const postAgentStarted = (data) => {
  console.log({ type: types.POST_AGENT_STARTED, payload: data });
  return {type: types.POST_AGENT_STARTED}
  }
export const postAgentSuccess = (data) => {
  console.log({type: types.POST_AGENT_SUCCESS, payload: data});
  return {type: types.POST_AGENT_SUCCESS, payload: data}
  }
export const postAgentFailed = (error) => {
  console.log({type: types.POST_AGENT_FAILED, payload: error});
  return {type: types.POST_AGENT_FAILED, payload: error}
  }

// PUT OWNER ----------------------------------------------------------
export const putAgentStarted = (data) => {
  console.log({ type: types.PUT_AGENT_STARTED, payload: data });
  return {type: types.PUT_AGENT_STARTED}
  }
export const putAgentSuccess = (data) => {
  console.log({type: types.PUT_AGENT_SUCCESS, payload: data});
  return {type: types.PUT_AGENT_SUCCESS, payload: data}
  }
export const putAgentFailed = (error) => {
  console.log({type: types.PUT_AGENT_FAILED, payload: error});
  return {type: types.PUT_AGENT_FAILED, payload: error}
  }

// DELETE OWNER -----------------------------------------------------
export const deleteAgentStarted = (data) => {
  console.log({ type: types.DELETE_AGENT_STARTED, payload: data });
  return {type: types.DELETE_AGENT_STARTED, payload: data}
  }
export  const deleteAgentSuccess = (data) => {
  console.log({type: types.DELETE_AGENT_SUCCESS, payload: data});
  return {type: types.DELETE_AGENT_SUCCESS, payload: data}
  }
export  const deleteAgentFailed = (error) => {
  console.log({type: types.DELETE_AGENT_FAILED, payload: error});
  return {type: types.DELETE_AGENT_FAILED, payload: error}
  }

