import {combineReducers} from 'redux';
import home from './home';
import formOne from './formOne';
import formTwo from './formTwo';
import formThree from './formThree';
import dogovorData from './dogovorData';
import ownerDic from './ownerDic';
import agentDic from './agentDic';
import objDic from './objDic';
import dogDic from './dogDic';

const rootReducer = combineReducers({
    home,
    dogovorData,
    ownerDic,
    agentDic,
    objDic,
    dogDic
});

export default rootReducer;
