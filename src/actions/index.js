import * as types from "../constants/actionTypes";

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
