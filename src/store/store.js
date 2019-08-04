import { createStore } from 'redux';
import reducer from './reducers';

/**
 * Creates the store from the State
 * received from the reducer(s)
 */
export default createStore(reducer);
