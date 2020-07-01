import {state} from '../state.js';
import {
  YURLITSO,
  DOGOVOR_TYPE,
  FETCH_SAMPLE_STARTED,
  FETCH_SAMPLE_SUCCESS,
  FETCH_SAMPLE_FAILED,
  POST_OWNER_STARTED,
  POST_OWNER_SUCCESS,
  POST_OWNER_FAILED
} from '../constants/actionTypes'
import {css} from 'styled-components';
import {fetchSample} from '../actions/index';
import {store} from '../index';
//import axios from 'axios'; 
/*
const url = 'http://142.93.173.95:4001/owners';
const res = async (x) => {
  const out = await axios.get(url)
  console.log("x in axios in home reducer: ", out.data[0]);
  return out;
};
*/
const initialState = (window.Cypress && window.initialState) ||
  state;
//store.dispatch(fetchSample());

export default function(state = initialState,action){
  switch (action.type){
    case YURLITSO:
      return { yurlitso: action.payload };
    case DOGOVOR_TYPE:
      return { dogovorType: action.payload };
    case FETCH_SAMPLE_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SAMPLE_SUCCESS:
      return {
        ...state,
        sampleIsLoading: false,
        error: null,
        sampleData: [action.payload]
      };
    case FETCH_SAMPLE_FAILED:
      return {
        ...state,
        sampleIsLoading: false,
        error: action.payload.error
      };
    default:        
      return state;
  };
};

