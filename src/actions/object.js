

    import * as types from "../constants/actionTypes";
//import {errors} from "puppeteer";
import axios from 'axios';
import { store } from '../index';

//  CONTENT ----------------------------------------------------------

// GET OWNER --------------------------------------------------------
const getObjectStarted =(data) => {
  console.log("GET_OBJECT_STARTED with data:" , data);
  return {type: types.GET_OBJECT_STARTED};
  };
const getObjectSuccess = (data) => {
  console.log("GET_OBJECT_SUCCESS with data: ", data);
  return {type: types.GET_OBJECT_SUCCESS, payload: data};
  };
const getObjectFailed = (error) => {
  console.log("GET_OBJECT_FAILED with error: ", error);
  return {type: types.GET_OBJECT_FAILED, payload: error};
  };
export const getObject = (data) => {
  return (dispatch) => {
    console.log("GET OBJECT ACTION INITIATED");
    dispatch(getObjectStarted());
    axios
      .get(`http://localhost:4001/objects`)
      .then(res => dispatch(getObjectSuccess(res.data)))
      .catch(err =>dispatch(getObjectFailed(err.message)))
  }
  };
// POST OWNER --------------------------------------------------------
const postObjectStarted = (data) => {
  console.log("POST_OBJECT_STARTED with data :", data);
  return {type: types.POST_OBJECT_STARTED}
  }
const postObjectSuccess = (data) => {
  console.log("POST_OBJECT_SUCCESS with data: ", data);
  return {type: types.POST_OBJECT_SUCCESS, payload: data}
  }
const postObjectFailed = (error) => {
  console.log("POST_OBJECT_FAILED with error :", error);
  return {type: types.POST_OBJECT_FAILED, payload: error}
  }
export const postObject = (data) => {
  return (dispatch) => {
    console.log("POST OBJECT ACTION INITIATED");
    dispatch(postObjectStarted(data));
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.post(`http://localhost:4001/objects`,{...data})
      .then(res => dispatch(postObjectSuccess(res.data)))
      .catch(err =>dispatch(postObjectFailed(err.message)))
  }
}
// PUT OWNER ---------------------------------------------------------
const putObjectStarted = (data) => {
  console.log("PUT_OBJECT_STARTED with data: ", data);
  return {type: types.PUT_OBJECT_STARTED}
  }
const putObjectSuccess = (data) => {
  console.log("PUT_OBJECT_SUCCESS with data", data);
  return {type: types.PUT_OBJECT_SUCCESS, payload: data}
  }
const putObjectFailed = (error) => {
  console.log("PUT_OBJECT_FAILED with error: ", error);
  return {type: types.PUT_OBJECT_FAILED, payload: error}
  }
export const putObject = (data) => {
  return (dispatch) => {
    console.log("PUT OBJECT ACTION INITIATED");
    dispatch(putObjectStarted(data));
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.put(`http://localhost:4001/objects`,{...data})
      .then(res => dispatch(putObjectSuccess(res.data)))
      .catch(err => dispatch(putObjectFailed(err.message)))
    }
}
// DELETE OWNER -----------------------------------------------------
const deleteObjectStarted = (data) => {
    console.log("DELETE_OBJECT_STARTED with data: ", data);
    return {type: types.DELETE_OBJECT_STARTED, payload: data}
    }
const deleteObjectSuccess = (data) => {
  // store.dispatch(getOwner())
  console.log("DELETE_OBJECT_SUCCESS with data: ", data);
  return {type: types.DELETE_OBJECT_SUCCESS, payload: data}
  }
const deleteObjectFailed = (error) => {
    console.log("DELETE_OBJECT_FAILED with error: ", error);
    return {type: types.DELETE_OBJECT_FAILED, payload: error}
    }
export const deleteObject= (data) => {
    return (dispatch) => {
      console.log("DELETE AGENT ACTION INITIATED");
      console.log("data in delete: ", data);
      dispatch(deleteObjectStarted(data));
      //axios.post('http://142.93.173.95:4001/owners',{...data})
      axios.delete(`http://localhost:4001/objects`,{data:{id:data}}
      // {data:{id: 1000}}
    )
      .then(res => dispatch(deleteObjectSuccess(res.data)))
      .catch(err =>dispatch(deleteObjectFailed(err.message)))
    }
  }
//  OWNER DIC --------------------------------------------------------
export const objectDicCreate = (_data) => {
  store.dispatch(postObject(_data));
  console.log("OBJECTDIC_CREATE with data: ", _data);
  return {type:types.OBJDIC_CREATE, payload: _data};
  };
export const objectDicUpdate = _data => {
  store.dispatch(putObject(_data));
  console.log({type:types.OBJDIC_UPDATE,payload:_data});
  return {type:types.OBJDIC_UPDATE, payload: _data};
  };
export const objectDicDelete = _data => {
  store.dispatch(deleteObject(_data));
  console.log({type:types.OBJDIC_DELETE,payload:_data});
  return {type:types.OBJDIC_DELETE, payload: _data};
}
