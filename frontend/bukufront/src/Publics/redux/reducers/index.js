import {combineReducers} from 'redux';
import {buku} from './buku';


const appReducer = combineReducers({
    buku,
});

export default appReducer;
