

    import * as types from "../constants/actionTypes";
//import {errors} from "puppeteer";
import axios from 'axios';
import { store } from '../index';

//  CONTENT ----------------------------------------------------------

// GET OWNER --------------------------------------------------------
const getOwnerStarted =(data) => {
  console.log("GET_OWNER_STARTED with data:" , data);
  return {type: types.GET_OWNER_STARTED};
  };
const getOwnerSuccess = (data) => {
  console.log(`GET_OWNER_SUCCESS with data: ${data}`);
  return {type: types.GET_OWNER_SUCCESS, payload: data};
  };
const getOwnerFailed = (error) => {
  console.log(`GET_OWNER_FAILED with error ${error}`);
  return {type: types.GET_OWNER_FAILED, payload: error};
  };
export const getOwner = (data) => {
  return (dispatch) => {
    console.log("GET ACTION INITIATED");
    dispatch(getOwnerStarted(data));
    axios
      .get(`http://142.93.173.95:4001/owners`)
      //.get(`http://localhost:4001/owners`)
      .then(res => dispatch(getOwnerSuccess(res.data)))
      .catch(err =>dispatch(getOwnerFailed(err.message)))
  }
  };
// POST OWNER --------------------------------------------------------
const postOwnerStarted = (data) => {
  console.log("POST_OWNER_STARTED withdata :", data);
  return {type: types.POST_OWNER_STARTED}
  }
const postOwnerSuccess = (data) => {
  console.log("POST_OWNER_SUCCESS with data: ", data);
  return {type: types.POST_OWNER_SUCCESS, payload: data}
  }
const postOwnerFailed = (error) => {
  console.log("POST_OWNER_FAILED with error :", error);
  return {type: types.POST_OWNER_FAILED, payload: error}
  }
export const postOwner = (data) => {
  return (dispatch) => {
    console.log("POST ACTION INITIATED");
    dispatch(postOwnerStarted(data));
    axios.post('http://142.93.173.95:4001/owners',{...data})
    //axios.post(`http://localhost:4001/owners`,{...data})
      .then(res => dispatch(postOwnerSuccess(res.data)))
      .catch(err =>dispatch(postOwnerFailed(err.message)))
  }
}
// PUT OWNER ---------------------------------------------------------
const putOwnerStarted = (data) => {
  console.log("PUT_OWNER_STARTED with data: ", data);
  return {type: types.PUT_OWNER_STARTED}
  }
const putOwnerSuccess = (data) => {
  console.log("PUT_OWNER_SUCCESS with data", data);
  return {type: types.PUT_OWNER_SUCCESS, payload: data}
  }
const putOwnerFailed = (error) => {
  console.log("PUT_OWNER_FAILED witherror: ", error);
  return {type: types.PUT_OWNER_FAILED, payload: error}
  }
export const putOwner = (data) => {
  return (dispatch) => {
    console.log("PUT ACTION INITIATED");
    dispatch(putOwnerStarted(data));
    axios.put('http://142.93.173.95:4001/owners',{...data})
    //axios.put(`http://localhost:4001/owners`,{...data})
      .then(res => dispatch(putOwnerSuccess(res.data)))
      .catch(err => dispatch(putOwnerFailed(err.message)))
    }
}
// DELETE OWNER -----------------------------------------------------
const deleteOwnerStarted = (data) => {
    console.log("DELETE_OWNER_STARTED with data: ", data);
    return {type: types.DELETE_OWNER_STARTED, payload: data}
    }
const deleteOwnerSuccess = (data) => {
  // store.dispatch(getOwner())
  console.log("DELETE_OWNER_SUCCESS withdata: ", data);
  return {type: types.DELETE_OWNER_SUCCESS, payload: data}
  }
const deleteOwnerFailed = (error) => {
    console.log("DELETE_OWNER_FAILED with error: ", error);
    return {type: types.DELETE_OWNER_FAILED, payload: error}
    }
export const deleteOwner = (data) => {
    return (dispatch) => {
      console.log("DELETE ACTION INITIATED");
      console.log("data in delete: ", data);
      dispatch(deleteOwnerStarted(data));
      axios.delete('http://142.93.173.95:4001/owners',{data:{id:data}})
      //axios.delete(`http://localhost:4001/owners`,{data:{id:data}}
      // {data:{id: 1000}}
    
      .then(res => dispatch(deleteOwnerSuccess(res.data)))
      .catch(err =>dispatch(deleteOwnerFailed(err.message)))
    }
  }
//  OWNER DIC --------------------------------------------------------
export const ownerDicCreate = (_data) => {
  store.dispatch(postOwner(_data));
  console.log("OWNERDIC_CREATE with data: ", _data);
  return {type:types.OWNERDIC_CREATE, payload: _data};
  };
export const ownerDicUpdate = _data => {
  store.dispatch(putOwner(_data));
  console.log({type:types.OWNERDIC_UPDATE,payload:_data});
  return {type:types.OWNERDIC_UPDATE, payload: _data};
  };
export const ownerDicDelete = _data => {
  store.dispatch(deleteOwner(_data));
  console.log({type:types.OWNERDIC_DELETE,payload:_data});
  return {type:types.OWNERDIC_DELETE, payload: _data};
}
