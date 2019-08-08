import {combineReducers} from 'redux'
import Register from './register';
import login from './login';
import profile from './profile'

const appReducer    =   combineReducers({
    login,
    Register,
    profile,
});
export default appReducer;