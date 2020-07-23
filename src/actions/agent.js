

    import * as types from "../constants/actionTypes";
//import {errors} from "puppeteer";
import axios from 'axios';
import { store } from '../index';

//  CONTENT ----------------------------------------------------------

// GET OWNER --------------------------------------------------------
const getAgentStarted =(data) => {
  console.log("GET_AGENT_STARTED with data:" , data);
  return {type: types.GET_AGENT_STARTED};
  };
const getAgentSuccess = (data) => {
  console.log("GET_AGENT_SUCCESS with data: ", data);
  return {type: types.GET_AGENT_SUCCESS, payload: data};
  };
const getAgentFailed = (error) => {
  console.log("GET_AGENT_FAILED with error: ", error);
  return {type: types.GET_OWNER_FAILED, payload: error};
  };
export const getAgent = (data) => {
  return (dispatch) => {
    console.log("GET AGENT ACTION INITIATED");
    dispatch(getAgentStarted());
    axios
    .get(`http://142.93.173.95:4001/agents`)
    //.get(`http://localhost:4001/agents`)
    .then(res => dispatch(getAgentSuccess(res.data)))
    .catch(err =>dispatch(getAgentFailed(err.message)))
  }
  };
// POST OWNER --------------------------------------------------------
const postAgentStarted = (data) => {
  console.log("POST_AGENT_STARTED with data :", data);
  return {type: types.POST_AGENT_STARTED}
  }
const postAgentSuccess = (data) => {
  console.log("POST_AGENT_SUCCESS with data: ", data);
  return {type: types.POST_AGENT_SUCCESS, payload: data}
  }
const postAgentFailed = (error) => {
  console.log("POST_AGENT_FAILED with error :", error);
  return {type: types.POST_AGENT_FAILED, payload: error}
  }
export const postAgent = (data) => {
  return (dispatch) => {
    console.log("POST AGENT ACTION INITIATED");
    dispatch(postAgentStarted(data));
    axios.post('http://142.93.173.95:4001/agents',{...data})
    //axios.post(`http://localhost:4001/agents`,{...data})
      .then(res => dispatch(postAgentSuccess(res.data)))
      .catch(err =>dispatch(postAgentFailed(err.message)))
  }
}
// PUT OWNER ---------------------------------------------------------
const putAgentStarted = (data) => {
  console.log("PUT_AGENT_STARTED with data: ", data);
  return {type: types.PUT_AGENT_STARTED}
  }
const putAgentSuccess = (data) => {
  console.log("PUT_AGENT_SUCCESS with data", data);
  return {type: types.PUT_AGENT_SUCCESS, payload: data}
  }
const putAgentFailed = (error) => {
  console.log("PUT_AGENT_FAILED witherror: ", error);
  return {type: types.PUT_AGENT_FAILED, payload: error}
  }
export const putAgent = (data) => {
  return (dispatch) => {
    console.log("PUT AGENT ACTION INITIATED");
    dispatch(putAgentStarted(data));
    axios.put('http://142.93.173.95:4001/agents',{...data})
    //axios.put(`http://localhost:4001/agents`,{...data})
      .then(res => dispatch(putAgentSuccess(res.data)))
      .catch(err => dispatch(putAgentFailed(err.message)))
    }
}
// DELETE OWNER -----------------------------------------------------
const deleteAgentStarted = (data) => {
    console.log("DELETE_AGENT_STARTED with data: ", data);
    return {type: types.DELETE_AGENT_STARTED, payload: data}
    }
const deleteAgentSuccess = (data) => {
  // store.dispatch(getOwner())
  console.log("DELETE_AGENT_SUCCESS withdata: ", data);
  return {type: types.DELETE_AGENT_SUCCESS, payload: data}
  }
const deleteAgentFailed = (error) => {
    console.log("DELETE_AGENT_FAILED with error: ", error);
    return {type: types.DELETE_AGENT_FAILED, payload: error}
    }
export const deleteAgent = (data) => {
    return (dispatch) => {
      console.log("DELETE AGENT ACTION INITIATED");
      console.log("data in delete: ", data);
      dispatch(deleteAgentStarted(data));
      axios
      .delete('http://142.93.173.95:4001/agents',{data:{id:data}})
      //axios.delete(`http://localhost:4001/agents`,{data:{id:data}}
      // {data:{id: 1000}}
      .then(res => dispatch(deleteAgentSuccess(res.data)))
      .catch(err =>dispatch(deleteAgentFailed(err.message)))
    }
  }
//  OWNER DIC --------------------------------------------------------
export const agentDicCreate = (_data) => {
  store.dispatch(postAgent(_data));
  console.log("AGENTDIC_CREATE with data: ", _data);
  return {type:types.AGENTDIC_CREATE, payload: _data};
  };
export const agentDicUpdate = _data => {
  store.dispatch(putAgent(_data));
  console.log({type:types.AGENTDIC_UPDATE,payload:_data});
  return {type:types.AGENTDIC_UPDATE, payload: _data};
  };
export const agentDicDelete = _data => {
  store.dispatch(deleteAgent(_data));
  console.log({type:types.AGENTDIC_DELETE,payload:_data});
  return {type:types.AGENTDIC_DELETE, payload: _data};
}
