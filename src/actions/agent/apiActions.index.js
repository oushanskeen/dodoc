  import * as types from "../../constants/actionTypes";
  import axios from 'axios';
  import { store } from '../../index';
  import * as apiActions from './apiActions';

//  CONTENT -----------------------------------------------------------

// GET AGENT
export const getAgent = (data) => {
  return (dispatch) => {
    console.log("GET AGENT ACTION INITIATED");
    dispatch(apiActions.getAgentStarted(data))
    console.log("data in getAgent: ", data);
    axios.get(`http://localhost:4001/${data}`,{...data})
      .then(res => 
        dispatch(apiActions.getAgentSuccess({[data]:res.data})))
      .catch(err => 
        dispatch(apiActions.getAgentFailed(err.message))
      )
  }
  }
// POST AGENT ---------------------------------------------------------
export const postAgent = (data) => {
  return (dispatch) => {
    console.log("POST AGENT ACTION INITIATED");
    dispatch(apiActions.postAgentStarted(data.dicData));
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.post(`http://localhost:4001/${data.dicName}`,
      {...data.dicData}
    )
      .then(
        //res => dispatch(postOwnerSuccess(filtered(res.data)))
        res => dispatch(apiActions.postAgentSuccess({[data.dicName]:res.data}))
      )
      .catch(err =>
        dispatch(apiActions.postAgentFailed(err.message))
      )
  }
  }
// PUT AGENT ----------------------------------------------------------
export const putAgent = (data) => {
  return (dispatch) => {
    console.log("PUT AGENT ACTION INITIATED");
    dispatch(apiActions.putAgentStarted(data.dicData));
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.put(`http://localhost:4001/${data.dicName}`,
      {...data.dicData})
      .then(
        res => dispatch(apiActions.putAgentSuccess({[data.dicName]:res.data}))
      )
      .catch(err =>
        dispatch(apiActions.putAgentFailed(err.message))
      )
  }
}
// DELETE Agent -----------------------------------------------------
export const deleteAgent = (data) => {
  return (dispatch) => {
    console.log("DELETE AGENT ACTION INITIATED");
    console.log("data in delete: ", data);
    dispatch(apiActions.deleteAgentStarted(data));
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.delete(`http://localhost:4001/${data.dicName}`,
        {data:{id:data.dicData}}
     // {data:{id: 1000}}
    )
      .then(
        res => dispatch(apiActions.deleteAgentSuccess(
          // id
          {[data.dicName]:res.data}
        ))
      )
      .catch(err =>
        dispatch(apiActions.deleteAgentFailed(err.message))
      )
    }
  }

