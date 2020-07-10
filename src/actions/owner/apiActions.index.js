  import * as types from "../../constants/actionTypes";
  import axios from 'axios';
  import { store } from '../../index';
  import * as apiActions from './apiActions';

//  CONTENT -----------------------------------------------------------

export const getOwner = (data) => {
  return (dispatch) => {
    console.log("GET OWNER ACTION INITIATED");
  dispatch(apiActions.getOwnerStarted(data))
    axios.get(`http://localhost:4001/${data}`,{...data})
      .then(res => dispatch(apiActions.getOwnerSuccess({[data]:res.data})))
      .catch(err => dispatch(apiActions.getOwnerFailed(err.message))
      )
  }
  }
// POST OWNER ---------------------------------------------------------
export const postOwner = (data) => {
  return (dispatch) => {
    console.log("POST OWNER ACTION INITIATED");
    dispatch(apiActions.postOwnerStarted(data.dicData));
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.post(`http://localhost:4001/${data.dicName}`,
      {...data.dicData}
    )
      .then(
        //res => dispatch(postOwnerSuccess(filtered(res.data)))
        res => dispatch(apiActions.postOwnerSuccess({[data.dicName]:res.data}))
      )
      .catch(err =>
        dispatch(apiActions.postOwnerFailed(err.message))
      )
  }
  }
// PUT OWNER ----------------------------------------------------------
export const putOwner = (data) => {
  return (dispatch) => {
    console.log("PUT OWNER ACTION INITIATED");
    dispatch(apiActions.putOwnerStarted(data.dicData));
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.put(`http://localhost:4001/${data.dicName}`,
      {...data.dicData})
      .then(
        res => dispatch(apiActions.putOwnerSuccess({[data.dicName]:res.data}))
      )
      .catch(err =>
        dispatch(apiActions.putOwnerFailed(err.message))
      )
  }
}
// DELETE OWNER -----------------------------------------------------
export const deleteOwner = (data) => {
  return (dispatch) => {
    console.log("DELETE OWNER ACTION INITIATED");
    console.log("data in delete: ", data);
    dispatch(apiActions.deleteOwnerStarted(data));
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.delete(`http://localhost:4001/${data.dicName}`,
        {data:{id:data.dicData}}
     // {data:{id: 1000}}
    )
      .then(
        res => dispatch(apiActions.deleteOwnerSuccess(
          // id
          {[data.dicName]:res.data}
        ))
      )
      .catch(err =>
        dispatch(apiActions.deleteOwnerFailed(err.message))
      )
    }
  }

