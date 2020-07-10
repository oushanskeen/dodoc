

    import * as types from "../constants/actionTypes";
//import {errors} from "puppeteer";
import axios from 'axios';
import { store } from '../index';

//  CONTENT -----------------------------------------------------------

//  OWNER DIC
//      ownerDicSelect :: "a" -> {type:"OWNERDIC_SELECT", payload:"a"}
//      ownerDicCreate :: "a" -> {type:"OWNERDIC_CREATE", payload:"a"}
//  AGENT DIC
//      agentDicSelect :: "a" -> {type:"AGENTDIC_SELECT", payload:"a"}
//      agentDicCreate :: "a" -> {type:"AGENTDIC_CREATE", payload:"a"}
//  OBJECT DIC 
//      objDicSelect :: "a" -> {type:"OBJDIC_SELECT", payload:"a"}
//      objDicCreate :: "a" -> {type:"OBJDIC_CREATE", payload:"a"}
//  DOGOVOR DIC
//      dogDicSelect :: "a" -> {type:"DOGDIC_SELECT", payload:"a"};
//      dogDicCreate :: "a" -> {type:"DOGDIC_CREATE", payload:"a"}
//      dogDicUpdate :: "a" -> {type:"DOGDIC_UPDATE", payload:"a"}
//      dogDicDelete :: "a" -> {type:"DOGDIC_DELETE", payload:"a"}


//  OBJECT DIC --------------------------------------------------------
    // "a" -> {type:"OBJDIC_SELECT", payload:"a"};
    export const objDicSelect = 
    _data => {
        console.log({type:types.OBJDIC_SELECT,payload:_data});
        return {type:types.OBJDIC_SELECT, payload: _data};
        };
    // "a" -> {type:"OBJDIC_CREATE", payload:"a"};
    export const objDicCreate = 
    _data => {
        console.log({type:types.OBJDIC_CREATE,payload:_data});
        return {type:types.OBJDIC_CREATE, payload: _data};
        };
    // "a" -> {type:"OBJDIC_UPDATE", payload:"a"};
    export const objDicUpdate = 
    _data => {
        console.log({type:types.OBJDIC_UPDATE,payload:_data});
        return {type:types.OBJDIC_UPDATE, payload: _data};
        };
    // "a" -> {type:"OBJDIC_DELETE", payload:"a"};
    export const objDicDelete = 
    _data => {
        console.log({type:types.OBJDIC_DELETE,payload:_data});
        return {type:types.OBJDIC_DELETE, payload: _data};
        };

//  DOGOVOR DIC -------------------------------------------------------
    // "a" -> {type:"DOGDIC_SELECT", payload:"a"};
    export const dogDicSelect = 
    _data => {
        console.log({type:types.DOGDIC_SELECT,payload:_data});
        return {type:types.DOGDIC_SELECT, payload: _data};
        };
    // "a" -> {type:"DOGDIC_CREATE", payload:"a"}
    export const dogDicCreate = 
    _data => {
        console.log({type:types.DOGDIC_CREATE,payload:_data});
        return {type:types.DOGDIC_CREATE, payload: _data};
        };
    // "a" -> {type:"DOGDIC_UPDATE", payload:"a"}
    export const dogDicUpdate = 
    _data => {
        console.log({type:types.DOGDIC_UPDATE,payload:_data});
        return {type:types.DOGDIC_UPDATE, payload: _data};
        };
    // "a" -> {type:"DOGDIC_DELETE", payload:"a"}
    export const dogDicDelete = 
    _data => {
        console.log({type:types.DOGDIC_DELETE,payload:_data});
        return {type:types.DOGDIC_DELETE, payload: _data};
        };

// GET OWNER --------------------------------------------------------
const getOwnerStarted =(data) => {
  console.log("GET_OWNER_STARTED with data:" , data);
  return {type: types.GET_OWNER_STARTED};
  };
const getOwnerSuccess = (data) => {
  console.log({type: types.GET_OWNER_SUCCESS, payload: data});
  return {type: types.GET_OWNER_SUCCESS, payload: data};
  };
const getOwnerFailed = (error) => {
  console.log({type: types.GET_OWNER_FAILED, payload: error});
  return {type: types.GET_OWNER_FAILED, payload: error};
  };
export const getOwner = (data) => {
  return (dispatch) => {
    console.log("GET ACTION INITIATED");
    dispatch(getOwnerStarted());
    axios
      .get(`http://localhost:4001/owners`)
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
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.post(`http://localhost:4001/owners`,{...data})
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
    //axios.post('http://142.93.173.95:4001/owners',{...data})
    axios.put(`http://localhost:4001/owners`,{...data})
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
      //axios.post('http://142.93.173.95:4001/owners',{...data})
      axios.delete(`http://localhost:4001/owners`,{data:{id:data}}
      // {data:{id: 1000}}
    )
      .then(res => dispatch(deleteOwnerSuccess(res.data)))
      .catch(err =>dispatch(deleteOwnerFailed(err.message)))
    }
  }
//  OWNER DIC --------------------------------------------------------

  // "a" -> {type:"OWNERDIC_CREATE", payload:"a"};
  export const ownerDicCreate = (_data) => {
    store.dispatch(postOwner(_data));
    console.log("OWNERDIC_CREATE with data: ", _data);
    return {type:types.OWNERDIC_CREATE, payload: _data};
  };
  // "a" -> {type:"OWNERDIC_UPDATE", payload:"a"};
  export const ownerDicUpdate = 
  _data => {
    store.dispatch(putOwner(_data));
    console.log({type:types.OWNERDIC_UPDATE,payload:_data});
    return {type:types.OWNERDIC_UPDATE, payload: _data};
  };
  // "a" -> {type:"OWNERDIC_DELETE", payload:"a"};
  export const ownerDicDelete = 
  _data => {
    store.dispatch(deleteOwner(_data));
    console.log({type:types.OWNERDIC_DELETE,payload:_data});
    return {type:types.OWNERDIC_DELETE, payload: _data};
  
}
//  AGENT DIC ---------------------------------------------------------
//  "a" -> {type:"AGENTDIC_SELECT", payload:"a"};
    export const agentDicCreate = 
    _data => {
        console.log({type:types.AGENTDIC_CREATE,payload:_data});
        return {type:types.AGENTDIC_CREATE, payload: _data};
        };
    //  "a" -> {type:"AGENTDIC_UPDATE", payload:"a"};
    export const agentDicUpdate = 
    _data => {
        console.log({type:types.AGENTDIC_UPDATE,payload:_data});
        return {type:types.AGENTDIC_UPDATE, payload: _data};
        };
    // "a" -> {type:"AGENTDIC_DELETE", payload:"a"};
    export const agentDicDelete = 
    _data => {
        console.log({type:types.AGENTDIC_DELETE,payload:_data});
        return {type:types.AGENTDIC_DELETE, payload: _data};
        };

// MISC- HAVE NO IDEA WHAT FOR ----------------------------------------
    // "a" -> {type:"DOGDIC_SELECT", payload:"a"}
    export const dogovorData = _data => {
        console.log({type:types.DOGOVOR_DATA, payload: _data});
        return {type:types.DOGOVOR_DATA, payload: _data}
    };
    export const formDataNew = _data => {
        console.log({type:types.FORM_DATA_NEW, payload: _data});
        return {type:types.FORM_DATA_NEW, payload: _data};
        };
    export const yurlitso = _yurlitso => {
        console.log({type:types.YURLITSO, payload: _yurlitso});
        return {type:types.YURLITSO, payload: _yurlitso};
        };
    export const dogovorType = _dogovor => {
        console.log({type:types.DOGOVOR_TYPE, payload: _dogovor});
        return {type:types.DOGOVOR_TYPE, payload: _dogovor};
        };
    export const zakazchikTypeOneData = _data => {
        console.log(
            {type:types.ZAKAZCHIK_TYPEONE_DATA,payload:_data});
        return ({type:types.ZAKAZCHIK_TYPEONE_DATA,payload:_data}
        );
        };
    export const zakazchikTypeTwoData = _data => {
        console.log(
            {type:types.ZAKAZCHIK_TYPETWO_DATA,payload:_data}
            );
        return ({type:types.ZAKAZCHIK_TYPETWO_DATA,payload:_data}
        );
        };
export const zakazchikTypeThreeData = _data => {
   console.log(
       {
            type:types.ZAKAZCHIK_TYPETHREE_DATA,
            payload:_data
       });
    return (
       {
            type:types.ZAKAZCHIK_TYPETHREE_DATA,
            payload:_data
       }
    );
};
