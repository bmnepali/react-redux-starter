import { combineReducers } from 'redux';
import counter from './counter.reducer';

/**
 * This can combine one or more Reducer functions and
 * export it through Redux's combineReducer helper.
 */
export default combineReducers({ countStore: counter });
