

    import * as types from "../constants/actionTypes";
//import {errors} from "puppeteer";
import axios from 'axios';
import { store } from '../index';

//  CONTENT ----------------------------------------------------------

// GET OWNER --------------------------------------------------------
const getDogovorStarted =(data) => {
  console.log("GET_DOGOVOR_STARTED with data:" , data);
  return {type: types.GET_DOGOVOR_STARTED};
  };
const getDogovorSuccess = (data) => {
  console.log("GET_DOGOVOR_SUCCESS with data: ", data);
  console.log(`GET DOGOVOR SUCCESS store: ${JSON.stringify(store.getState())}`);
  const out = 
      data.map(e => ({
      agentId: e.agentId,
      agentName: store.getState().agentDic.data.filter(el => el.id === e.agentId)[0].name,
      date: e.date,
      dogovorType: e.dogovorType,
      id: e.id,
      name: e.name,
      objId: e.objId,
      objName: store.getState().objDic.data.filter(el => el.id === e.objId)[0].name,
      ownerId: e.ownerId,
      ownerName: store.getState().ownerDic.data.filter(el => el.id === e.ownerId)[0].name,
      price: e.price,
      srokDeistviya: e.srokDeistviya,
      systems: e.systems
      }))
  return {
    type: types.GET_DOGOVOR_SUCCESS, 
    //payload: data
    payload: out,
  };
  };
const getDogovorFailed = (error) => {
  console.log("GET_DOGOVOR_FAILED with error: ", error);
  return {type: types.GET_OWNER_FAILED, payload: error};
  };
export const getDogovor = (data) => {
  return (dispatch) => {
    console.log("GET DOGOVOR ACTION INITIATED");
    dispatch(getDogovorStarted());
    axios
      //.get(`http://localhost:4001/dogovors`)
      //.get(`http://142.93.173.95:4001/dogovors`)
      .get(`https://dodoc.site/dogovors`)
      .then(res => dispatch(getDogovorSuccess(res.data)))
      .catch(err =>dispatch(getDogovorFailed(err.message)))
  }
  };
// POST OWNER --------------------------------------------------------
const postDogovorStarted = (data) => {
  console.log("POST_DOGOVOR_STARTED with data :", data);
  return {type: types.POST_DOGOVOR_STARTED}
  }
const postDogovorSuccess = (data) => {
  console.log("POST_DOGOVOR_SUCCESS with data: ", data);
  return {type: types.POST_DOGOVOR_SUCCESS, payload: data}
  }
const postDogovorFailed = (error) => {
  console.log("POST_DOGOVOR_FAILED with error :", error);
  return {type: types.POST_DOGOVOR_FAILED, payload: error}
  }
export const postDogovor = (data) => {
  return (dispatch) => {
    console.log("POST DOGOVOR ACTION INITIATED");
    dispatch(postDogovorStarted(data));
    //axios.post('http://142.93.173.95:4001/dogovors',{...data})
    axios.post('https://dodoc.site/dogovors',{...data})
    //axios.post(`http://localhost:4001/dogovors`,{...data})
      .then(res => dispatch(postDogovorSuccess(res.data)))
      .catch(err =>dispatch(postDogovorFailed(err.message)))
  }
}
// PUT OWNER ---------------------------------------------------------
const putDogovorStarted = (data) => {
  console.log("PUT_DOGOVOR_STARTED with data: ", data);
  return {type: types.PUT_DOGOVOR_STARTED}
  }
const putDogovorSuccess = (data) => {
  console.log("PUT_DOGOVOR_SUCCESS with data", data);
  return {type: types.PUT_DOGOVOR_SUCCESS, payload: data}
  }
const putDogovorFailed = (error) => {
  console.log("PUT_DOGOVOR_FAILED witherror: ", error);
  return {type: types.PUT_DOGOVOR_FAILED, payload: error}
  }
export const putDogovor = (data) => {
  return (dispatch) => {
    console.log("PUT DOGOVOR ACTION INITIATED");
    dispatch(putDogovorStarted(data));
    //axios.put('http://142.93.173.95:4001/dogovors',{...data})
    axios.put('https://dodoc.site/dogovors',{...data})
    //axios.put(`http://localhost:4001/dogovors`,{...data})
      .then(res => dispatch(putDogovorSuccess(res.data)))
      .catch(err => dispatch(putDogovorFailed(err.message)))
    }
}
// DELETE OWNER -----------------------------------------------------
const deleteDogovorStarted = (data) => {
    console.log("DELETE_DOGOVOR_STARTED with data: ", data);
    return {type: types.DELETE_DOGOVOR_STARTED, payload: data}
    }
const deleteDogovorSuccess = (data) => {
  // store.dispatch(getOwner())
  console.log("DELETE_DOGOVOR_SUCCESS withdata: ", data);
  return {type: types.DELETE_DOGOVOR_SUCCESS, payload: data}
  }
const deleteDogovorFailed = (error) => {
    console.log("DELETE_DOGOVOR_FAILED with error: ", error);
    return {type: types.DELETE_DOGOVOR_FAILED, payload: error}
    }
export const deleteDogovor = (data) => {
    return (dispatch) => {
      console.log("DELETE DOGOVOR ACTION INITIATED");
      console.log("data in delete: ", data);
      dispatch(deleteDogovorStarted(data));
      //axios.delete('http://142.93.173.95:4001/dogovors',{data:{id:data}})
      axios.delete('https://dodoc.site/dogovors',{data:{id:data}})
      //axios.delete(`http://localhost:4001/dogovors`,{data:{id:data}}
      // {data:{id: 1000}}
    
      .then(res => dispatch(deleteDogovorSuccess(res.data)))
      .catch(err =>dispatch(deleteDogovorFailed(err.message)))
    }
  }
//  OWNER DIC --------------------------------------------------------
export const dogovorDicCreate = (_data) => {
  store.dispatch(postDogovor(_data));
  console.log("DOGOVORDIC_CREATE with data: ", _data);
  return {type:types.DOGOVORDIC_CREATE, payload: _data};
  };
export const dogovorDicUpdate = _data => {
  store.dispatch(putDogovor(_data));
  console.log({type:types.DOGOVORDIC_UPDATE,payload:_data});
  return {type:types.DOGOVORDIC_UPDATE, payload: _data};
  };
export const dogovorDicDelete = _data => {
  store.dispatch(deleteDogovor(_data));
  console.log({type:types.DOGOVORDIC_DELETE,payload:_data});
  return {type:types.DOGOVORDIC_DELETE, payload: _data};
}
