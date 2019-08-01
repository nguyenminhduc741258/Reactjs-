import {combineReducers} from 'redux'
import Register from './register';
import login from './login';

const appReducer    =   combineReducers({
    login,
    Register,
});
export default appReducer;