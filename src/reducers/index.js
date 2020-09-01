import {combineReducers} from 'redux';
import home from './home';
import dogovorData from './dogovorData';
import ownerDic from './ownerDic';
import agentDic from './agentDic';
import objDic from './objDic';
import dogDic from './dogDic';
import paperDogovor from "./paperDogovor";

const rootReducer = combineReducers({
    home,
    dogovorData,
    ownerDic,
    agentDic,
    objDic,
    dogDic,
    paperDogovor
});

export default rootReducer;
