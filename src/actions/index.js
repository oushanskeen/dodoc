import * as types from "../constants/actionTypes";

export const yurlitso = _yurlitso => {
    console.log({type:types.YURLITSO, payload: _yurlitso});
    return {type:types.YURLITSO, payload: _yurlitso};
};

export const dogovorType = _dogovor => {
    console.log({type:types.DOGOVOR_TYPE, payload: _dogovor});
    return {type:types.DOGOVOR_TYPE, payload: _dogovor};
};
