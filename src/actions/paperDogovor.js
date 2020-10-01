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
  getPaperDogovorsList(data.name);
  console.log(`ON PAPER DOGOVR SUCCESS SAVE EMIT GET PAPER DOGOVR LIST`);
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
      .then(res => {dispatch(savePaperDogovorSuccess(res));

      dispatch(getPaperDogovorsList({name:data.name}))})
      .catch(err => dispatch(savePaperDogovorFailed(err.message)));
  };
};
const printPaperDogovorStarted = (data) => {
  console.log("PRINT_PAPER_DOGOVOR_STARTED with data:", data);
  return { type: types.PRINT_PAPER_DOGOVOR_STARTED };
};
const printPaperDogovorSuccess = (data) => {
  console.log(`PRINT_PAPER_DOGOVOR_SUCCESS with data: ${JSON.stringify(data)}`);
  return { type: types.PRINT_PAPER_DOGOVOR_SUCCESS};
};
const printPaperDogovorFailed = (error) => {
  console.log(`PRINT_PAPER_DOGOVOR_FAILED with error ${error}`);
  return { type: types.PRINT_PAPER_DOGOVOR_FAILED, payload: error };
};
export const printPaperDogovor = (data) => {
  return dispatch => {
    console.log("PRINT PDF ACTION INITIATED");
    
    dispatch(printPaperDogovorStarted(data));
    axios
      //.post(`https://dodoc.site/send`,{...data})
      //.post(`https://dodoc.site/send`,{hello:"world"})
      .post(`https://dodoc.site/send`,{data:data})
      .then(res => dispatch(printPaperDogovorSuccess(res)))
      .catch(err => dispatch(printPaperDogovorFailed(err.message)));
  };
};

