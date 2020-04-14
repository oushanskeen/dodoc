import {combineReducers} from 'redux';
import home from './home';
import formOne from './formOne';
import formTwo from './formTwo';
import formThree from './formThree';

const rootReducer = combineReducers({
    home,
    formOne,
    formTwo,
    formThree
});

export default rootReducer;
