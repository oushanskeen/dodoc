import {combineReducers} from 'redux';
import home from './home';
import formOne from './formOne';
import formTwo from './formTwo';
import formThree from './formThree';

const rootReducer = combineReducers({
    home,
    form:combineReducers({formOne,formTwo,formThree}),
});

export default rootReducer;
