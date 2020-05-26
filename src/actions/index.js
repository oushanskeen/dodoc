

    import * as types from "../constants/actionTypes";


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


//  OWNER DIC ---------------------------------------------------------

    // "a" -> {type:"OWNERDIC_SELECT", payload:"a"};
    export const ownerDicSelect = 
    _data => {
        console.log({type:types.OWNERDIC_SELECT,payload:_data});
        return {type:types.OWNERDIC_SELECT, payload: _data};
        };
    // "a" -> {type:"OWNERDIC_CREATE", payload:"a"};
    export const ownerDicCreate = 
    _data => {
        console.log({type:types.OWNERDIC_CREATE,payload:_data});
        return {type:types.OWNERDIC_CREATE, payload: _data};
        };
    // "a" -> {type:"OWNERDIC_UPDATE", payload:"a"};
    export const ownerDicUpdate = 
    _data => {
        console.log({type:types.OWNERDIC_UPDATE,payload:_data});
        return {type:types.OWNERDIC_UPDATE, payload: _data};
        };
    // "a" -> {type:"OWNERDIC_DELETE", payload:"a"};
    export const ownerDicDelete = 
    _data => {
        console.log({type:types.OWNERDIC_DELETE,payload:_data});
        return {type:types.OWNERDIC_DELETE, payload: _data};
        };


//  AGENT DIC ---------------------------------------------------------

    //  "a" -> {type:"AGENTDIC_SELECT", payload:"a"};
    export const agentDicSelect = 
    _data => {
        console.log({type:types.AGENTDIC_SELECT,payload:_data});
        return {type:types.AGENTDIC_SELECT, payload: _data};
        };
    // "a" -> {type:"AGENTDIC_CREATE", payload:"a"};
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

// MISC- HAVE NO IDEA WHAT FOR ----------------------------------------

    // "a" -> {type:"DOGDIC_SELECT", payload:"a"}
    export const dogovorData = 
    _data => {
        console.log({type:types.DOGOVOR_DATA, payload: _data});
        return {type:types.DOGOVOR_DATA, payload: _data}
    };
    export const formDataNew = 
    _data => {
        console.log({type:types.FORM_DATA_NEW, payload: _data});
        return {type:types.FORM_DATA_NEW, payload: _data};
        };
    export const yurlitso = 
    _yurlitso => {
        console.log({type:types.YURLITSO, payload: _yurlitso});
        return {type:types.YURLITSO, payload: _yurlitso};
        };
    export const dogovorType = 
    _dogovor => {
        console.log({type:types.DOGOVOR_TYPE, payload: _dogovor});
        return {type:types.DOGOVOR_TYPE, payload: _dogovor};
        };
    export const zakazchikTypeOneData = 
    _data => {
        console.log(
            {type:types.ZAKAZCHIK_TYPEONE_DATA,payload:_data});
        return ({type:types.ZAKAZCHIK_TYPEONE_DATA,payload:_data}
        );
        };
    export const zakazchikTypeTwoData = 
    _data => {
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
