import {combineReducers} from 'redux';
import home from './home';
import formOne from './formOne';
import formTwo from './formTwo';
import formThree from './formThree';
import formDataNew from './formDataNew';
import dogovorData from './dogovorData';

const rootReducer = combineReducers({
    home,
    formDataNew,
    dogovorData
});

export default rootReducer;
