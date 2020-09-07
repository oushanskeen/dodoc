import * as types from "../constants/actionTypes";
//import {errors} from "puppeteer";
import axios from "axios";

//  CONTENT ----------------------------------------------------------


// SAVE_PAPER_DOGOVOR -------------------------------------------------------


const getPaperDogovorsListStarted = (data) => {
  console.log("GET_PAPER_DOGOVORS_LIST_STARTED with data:", data);
  console.log(`type of get dogovor data: ${typeof data}`);
  return { type: types.GET_PAPER_DOGOVORS_LIST_STARTED };
};
const getPaperDogovorsListSuccess = (data) => {
  console.log(`GET_PAPER_DOGOVORS_LIST_SUCCESS with data: 
    ${JSON.stringify(data)}`);
  return { type: types.GET_PAPER_DOGOVORS_LIST_SUCCESS, payload: data };
};
const getPaperDogovorsListFailed = (error) => {
  console.log(`GET_PAPER_DOGOVORS_LIST_FAILED with error ${error}`);
  return { type: types.GET_PAPER_DOGOVORS_LIST_FAILED, payload: error };
};
export const getPaperDogovorsList = (data) => {
  return dispatch => {
    //console.log("GET ACTION INITIATED");
    dispatch(getPaperDogovorsListStarted(data));
    axios
      .get(`https://dodoc.site/paperdogovorslist`,{params:{...data}})
      .then(res => dispatch(getPaperDogovorsListSuccess(res.data)))
      .catch(err => dispatch(getPaperDogovorsListFailed(err.message)));
  };
};

const getPaperDogovorStarted = (data) => {
  console.log("GET_PAPER_DOGOVOR_STARTED with data:", data);
  console.log(`type of get dogovor data: ${typeof data}`);
  return { type: types.GET_PAPER_DOGOVOR_STARTED };
};
const getPaperDogovorSuccess = (data) => {
  console.log(`GET_PAPER_DOGOVOR_SUCCESS with data: ${JSON.stringify(data)}`);
  return { type: types.GET_PAPER_DOGOVOR_SUCCESS, payload: data };
};
const getPaperDogovorFailed = (error) => {
  console.log(`GET_PAPER_DOGOVOR_FAILED with error ${error}`);
  return { type: types.GET_PAPER_DOGOVOR_FAILED, payload: error };
};
export const getPaperDogovor = (data) => {
  return dispatch => {
    //console.log("GET ACTION INITIATED");
    dispatch(getPaperDogovorStarted(data));
    axios
      .get(`https://dodoc.site/paperdogovors`,{params:{...data}})
      .then(res => dispatch(getPaperDogovorSuccess(res.data)))
      .catch(err => dispatch(getPaperDogovorFailed(err.message)));
  };
};
export const dogOnSaveStatusToDefault = () => {
  console.log("DOG_ON_SAVE_STATUS_TO_DEFAULT");
  return {type: types.DOG_ON_SAVE_STATUS_TO_DEFAULT};
};
const savePaperDogovorStarted = (data) => {
  console.log("SAVE_PAPER_DOGOVOR_STARTED with data:", data);
  console.log(`type of get dogovor data: ${typeof data}`);
  return { type: types.SAVE_PAPER_DOGOVOR_STARTED };
};
const savePaperDogovorSuccess = (data) => {
  console.log(`SAVE_PAPER_DOGOVOR_SUCCESS with data: ${JSON.stringify(data)}`);
  return { type: types.SAVE_PAPER_DOGOVOR_SUCCESS, payload: data };
};
const savePaperDogovorFailed = (error) => {
  console.log(`SAVE_PAPER_DOGOVOR_FAILED with error ${error}`);
  return { type: types.SAVE_PAPER_DOGOVOR_FAILED, payload: error };
};
export const savePaperDogovor = (data) => {
  return dispatch => {
    //console.log("GET ACTION INITIATED");
    dispatch(savePaperDogovorStarted(data));
    axios
      .post(`https://dodoc.site/paperdogovors`,{...data})
      .then(res => dispatch(savePaperDogovorSuccess(res)))
      .catch(err => dispatch(savePaperDogovorFailed(err.message)));
  };
};

export const printPaperDogovor = (data) => {
  console.log(`{type: "PRINT_PAPER_DOGOVOR", payload: ${data}}`);
  return {type: types.PRINT_PAPER_DOGOVOR, payload: data}
}
/*
// PRINT_PAPER_DOGOVOR ------------------------------------------------------

// GET PAPER_DOGOVOR --------------------------------------------------------
const getPaperDogovorStarted = data => {
  console.log("GET_PAPER_DOGOVOR_STARTED with data:", data);
  return { type: types.GET_PAPER_DOGOVOR_STARTED };
};
const getPaperDogovorSuccess = data => {
  console.log(`GET_PAPER_DOGOVOR_SUCCESS with data: ${data}`);
  return { type: types.GET_PAPER_DOGOVOR_SUCCESS, payload: data };
};
const getPaperDogovorFailed = error => {
  console.log(`GET_PAPER_DOGOVOR_FAILED with error ${error}`);
  return { type: types.GET_PAPER_DOGOVOR_FAILED, payload: error };
};
export const getPaperDogovor = data => {
  return dispatch => {
    console.log("GET ACTION INITIATED");
    dispatch(getPaperDogovorStarted(data));
    axios
      .get(`https://dodoc.site/paperDogovors`)
      //.get(`http://142.93.173.95:4001/paperDogovors`)
      //.get(`http://localhost:4001/paperDogovors`)
      .then(res => dispatch(getPaperDogovorSuccess(res.data)))
      .catch(err => dispatch(getPaperDogovorFailed(err.message)));
  };
};
// POST PAPER_DOGOVOR --------------------------------------------------------
const postPaperDogovorStarted = data => {
  console.log("POST_PAPER_DOGOVOR_STARTED withdata :", data);
  return { type: types.POST_PAPER_DOGOVOR_STARTED };
};
const postPaperDogovorSuccess = data => {
  console.log("POST_PAPER_DOGOVOR_SUCCESS with data: ", data);
  return { type: types.POST_PAPER_DOGOVOR_SUCCESS, payload: data };
};
const postPaperDogovorFailed = error => {
  console.log("POST_PAPER_DOGOVOR_FAILED with error :", error);
  return { type: types.POST_PAPER_DOGOVOR_FAILED, payload: error };
};
export const postPaperDogovor = data => {
  return dispatch => {
    console.log("POST ACTION INITIATED");
    dispatch(postPaperDogovorStarted(data));
    axios
      .post("https://dodoc.site/paperDogovors", { ...data })
      //axios.post(`http://localhost:4001/paperDogovors`,{...data})
      .then(res => dispatch(postPaperDogovorSuccess(res.data)))
      .catch(err => dispatch(postPaperDogovorFailed(err.message)));
  };
};
// PUT PAPER_DOGOVOR ---------------------------------------------------------
const putPaperDogovorStarted = data => {
  console.log("PUT_PAPER_DOGOVOR_STARTED with data: ", data);
  return { type: types.PUT_PAPER_DOGOVOR_STARTED };
};
const putPaperDogovorSuccess = data => {
  console.log("PUT_PAPER_DOGOVOR_SUCCESS with data", data);
  return { type: types.PUT_PAPER_DOGOVOR_SUCCESS, payload: data };
};
const putPaperDogovorFailed = error => {
  console.log("PUT_PAPER_DOGOVOR_FAILED witherror: ", error);
  return { type: types.PUT_PAPER_DOGOVOR_FAILED, payload: error };
};
export const putPaperDogovor = data => {
  return dispatch => {
    console.log("PUT ACTION INITIATED");
    dispatch(putPaperDogovorStarted(data));
    axios
      .put("https://dodoc.site/paperDogovors", { ...data })
      //axios.put(`http://localhost:4001/paperDogovors`,{...data})
      .then(res => dispatch(putPaperDogovorSuccess(res.data)))
      .catch(err => dispatch(putPaperDogovorFailed(err.message)));
  };
};
// DELETE PAPER_DOGOVOR -----------------------------------------------------
const deletePaperDogovorStarted = data => {
  console.log("DELETE_PAPER_DOGOVOR_STARTED with data: ", data);
  return { type: types.DELETE_PAPER_DOGOVOR_STARTED, payload: data };
};
const deletePaperDogovorSuccess = data => {
  // store.dispatch(getPaperDogovor())
  console.log("DELETE_PAPER_DOGOVOR_SUCCESS withdata: ", data);
  return { type: types.DELETE_PAPER_DOGOVOR_SUCCESS, payload: data };
};
const deletePaperDogovorFailed = error => {
  console.log("DELETE_PAPER_DOGOVOR_FAILED with error: ", error);
  return { type: types.DELETE_PAPER_DOGOVOR_FAILED, payload: error };
};
export const deletePaperDogovor = data => {
  return dispatch => {
    console.log("DELETE ACTION INITIATED");
    console.log("data in delete: ", data);
    dispatch(deletePaperDogovorStarted(data));
    axios
      .delete("https://dodoc.site/paperDogovors", { data: { id: data } })
      //axios.delete(`http://localhost:4001/paperDogovors`,{data:{id:data}}
      // {data:{id: 1000}}

      .then(res => dispatch(deletePaperDogovorSuccess(res.data)))
      .catch(err => dispatch(deletePaperDogovorFailed(err.message)));
  };
};
//  PAPER_DOGOVOR  --------------------------------------------------------
export const paperDogovorCreate = _data => {
  store.dispatch(postPaperDogovor(_data));
  console.log("PAPER_DOGOVOR_CREATE with data: ", _data);
  return { type: types.PAPER_DOGOVOR_CREATE, payload: _data };
};
export const paperDogovorUpdate = _data => {
  store.dispatch(putPaperDogovor(_data));
  console.log({ type: types.PAPER_DOGOVOR_UPDATE, payload: _data });
  return { type: types.PAPER_DOGOVOR_UPDATE, payload: _data };
};
export const paperDogovorDelete = _data => {
  store.dispatch(deletePaperDogovor(_data));
  console.log({ type: types.PAPER_DOGOVOR_DELETE, payload: _data });
  return { type: types.PAPER_DOGOVOR_DELETE, payload: _data };
};
*/
