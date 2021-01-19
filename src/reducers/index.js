import counterReducer from './counter';
import loggedReducer from './isLogged';
import loadedData from './data';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    data:loadedData
})

export default allReducers;