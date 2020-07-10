  import * as types from "../../constants/actionTypes";
  import axios from 'axios';
  import { store } from '../../index';

//  CONTENT -----------------------------------------------------------

// GET OWNER -----------------------------------------------------------
export const getOwnerStarted =(data) => {
  console.log("GET_OWNER_STARTED with ", data);
  return {type: types.GET_OWNER_STARTED};
  };
export const getOwnerSuccess = (data) => {
  console.log({type: types.GET_OWNER_SUCCESS, payload: data});
  return {type: types.GET_OWNER_SUCCESS, payload: data};
  };
export const getOwnerFailed = (error) => {
  console.log({type: types.GET_OWNER_FAILED, payload: error});
  return {type: types.GET_OWNER_FAILED, payload: error};
  };

// POST OWNER ---------------------------------------------------------
export const postOwnerStarted = (data) => {
  console.log({ type: types.POST_OWNER_STARTED, payload: data });
  return {type: types.POST_OWNER_STARTED}
  }
export const postOwnerSuccess = (data) => {
  console.log({type: types.POST_OWNER_SUCCESS, payload: data});
  return {type: types.POST_OWNER_SUCCESS, payload: data}
  }
export const postOwnerFailed = (error) => {
  console.log({type: types.POST_OWNER_FAILED, payload: error});
  return {type: types.POST_OWNER_FAILED, payload: error}
  }

// PUT OWNER ----------------------------------------------------------
export const putOwnerStarted = (data) => {
  console.log({ type: types.PUT_OWNER_STARTED, payload: data });
  return {type: types.PUT_OWNER_STARTED}
  }
export const putOwnerSuccess = (data) => {
  console.log({type: types.PUT_OWNER_SUCCESS, payload: data});
  return {type: types.PUT_OWNER_SUCCESS, payload: data}
  }
export const putOwnerFailed = (error) => {
  console.log({type: types.PUT_OWNER_FAILED, payload: error});
  return {type: types.PUT_OWNER_FAILED, payload: error}
  }

// DELETE OWNER -----------------------------------------------------
export const deleteOwnerStarted = (data) => {
  console.log({ type: types.DELETE_OWNER_STARTED, payload: data });
  return {type: types.DELETE_OWNER_STARTED, payload: data}
  }
export  const deleteOwnerSuccess = (data) => {
  console.log({type: types.DELETE_OWNER_SUCCESS, payload: data});
  return {type: types.DELETE_OWNER_SUCCESS, payload: data}
  }
export  const deleteOwnerFailed = (error) => {
  console.log({type: types.DELETE_OWNER_FAILED, payload: error});
  return {type: types.DELETE_OWNER_FAILED, payload: error}
  }

