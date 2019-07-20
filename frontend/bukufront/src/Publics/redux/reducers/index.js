import {combineReducers} from 'redux';
import {buku} from './buku';
import { user } from "./user";


const appReducer = combineReducers({
    buku,
    user,
});

export default appReducer;
