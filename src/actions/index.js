

    import * as types from "../constants/actionTypes";
//import {errors} from "puppeteer";
import axios from 'axios';
import { store } from '../index';
import * as owner from './owner';
import * as agent from './agent';
import * as object from './object';
import * as dogovor from './dogovor';
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
//  DOGOVOROVOR DIC
//      dogDicSelect :: "a" -> {type:"DOGOVORDIC_SELECT", payload:"a"};
//      dogDicCreate :: "a" -> {type:"DOGOVORDIC_CREATE", payload:"a"}
//      dogDicUpdate :: "a" -> {type:"DOGOVORDIC_UPDATE", payload:"a"}
//      dogDicDelete :: "a" -> {type:"DOGOVORDIC_DELETE", payload:"a"}


//  DOGOVOROVOR DIC -----------------------------------------------------
    // "a" -> {type:"DOGOVORDIC_SELECT", payload:"a"};
    export const dogDicSelect = 
    _data => {
        console.log({type:types.DOGOVORDIC_SELECT,payload:_data});
        return {type:types.DOGOVORDIC_SELECT, payload: _data};
        };
    // "a" -> {type:"DOGOVORDIC_CREATE", payload:"a"}
    export const dogDicCreate = 
    _data => {
        console.log({type:types.DOGOVORDIC_CREATE,payload:_data});
        return {type:types.DOGOVORDIC_CREATE, payload: _data};
        };
    // "a" -> {type:"DOGOVORDIC_UPDATE", payload:"a"}
    export const dogDicUpdate = 
    _data => {
        console.log({type:types.DOGOVORDIC_UPDATE,payload:_data});
        return {type:types.DOGOVORDIC_UPDATE, payload: _data};
        };
    // "a" -> {type:"DOGOVORDIC_DELETE", payload:"a"}
    export const dogDicDelete = 
    _data => {
        console.log({type:types.DOGOVORDIC_DELETE,payload:_data});
        return {type:types.DOGOVORDIC_DELETE, payload: _data};
        };

export const getOwner = owner.getOwner;
export const postOwner = owner.postOwner;
export const putOwner = owner.putOwner;
export const deleteOwner = owner.deleteOwner;
export const ownerDicCreate = owner.ownerDicCreate;
export const ownerDicUpdate = owner.ownerDicUpdate;
export const ownerDicDelete = owner.ownerDicDelete;

export const getAgent = agent.getAgent;
export const postAgent = agent.postAgent;
export const putAgent = agent.putAgent;
export const deleteAgent = agent.deleteAgent;
export const agentDicCreate = agent.agentDicCreate;
export const agentDicUpdate = agent.agentDicUpdate;
export const agentDicDelete = agent.agentDicDelete;

export const getObject = object.getObject;
export const postObject = object.postObject;
export const putObject = object.putObject;
export const deleteObject = object.deleteObject;
export const objectDicCreate = object.objectDicCreate;
export const objectDicUpdate = object.objectDicUpdate;
export const objectDicDelete = object.objectDicDelete;

export const getDogovor = dogovor.getDogovor;
export const postDogovor = dogovor.postDogovor;
export const putDogovor = dogovor.putDogovor;
export const deleteDogovor = dogovor.deleteDogovor;
export const dogovorDicCreate = dogovor.dogovorDicCreate;
export const dogovorDicUpdate = dogovor.dogovorDicUpdate;
export const dogovorDicDelete = dogovor.dogovorDicDelete;
// MISC- HAVE NO IDEA WHAT FOR ----------------------------------------
    // "a" -> {type:"DOGOVORDIC_SELECT", payload:"a"}
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
