import * as types from "../constants/actionTypes";

// OWNER DIC
export const ownerDicSelect = _data => {
    console.log({type:types.OWNERDIC_SELECT,payload:_data});
    return {type:types.OWNERDIC_SELECT, payload: _data};
};
export const ownerDicCreate = _data => {
    console.log({type:types.OWNERDIC_CREATE,payload:_data});
    return {type:types.OWNERDIC_CREATE, payload: _data};
};
// AGENT DIC
export const agentDicSelect = _data => {
    console.log({type:types.AGENTDIC_SELECT,payload:_data});
    return {type:types.AGENTDIC_SELECT, payload: _data};
};
export const agentDicCreate = _data => {
    console.log({type:types.AGENTDIC_CREATE,payload:_data});
    return {type:types.AGENTDIC_CREATE, payload: _data};
};
// OBJECT DIC
export const objDicSelect = _data => {
    console.log({type:types.OBJDIC_SELECT,payload:_data});
    return {type:types.OBJDIC_SELECT, payload: _data};
};
export const objDicCreate = _data => {
    console.log({type:types.OBJDIC_CREATE,payload:_data});
    return {type:types.OBJDIC_CREATE, payload: _data};
};
// DOGOVOR DIC
export const dogDicSelect = _data => {
    console.log({type:types.DOGDIC_SELECT,payload:_data});
    return {type:types.DOGDIC_SELECT, payload: _data};
};
export const dogDicCreate = _data => {
    console.log({type:types.DOGDIC_CREATE,payload:_data});
    return {type:types.DOGDIC_CREATE, payload: _data};
};
export const dogDicUpdate = _data => {
    console.log({type:types.DOGDIC_UPDATE,payload:_data});
    return {type:types.DOGDIC_UPDATE, payload: _data};
};









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
       {
            type:types.ZAKAZCHIK_TYPEONE_DATA,
            payload:_data
       });
    return (
       {
            type:types.ZAKAZCHIK_TYPEONE_DATA,
            payload:_data
       }
    );
};
export const zakazchikTypeTwoData = _data => {
   console.log(
       {
            type:types.ZAKAZCHIK_TYPETWO_DATA,
            payload:_data
       });
    return (
       {
            type:types.ZAKAZCHIK_TYPETWO_DATA,
            payload:_data
       }
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
