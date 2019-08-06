// Gather required actions types
import { INCREMENT, DECREMENT } from '../action-types/counter.action.types';

// Counter Actions
export function incrementCounter(counter) {
  return {
    type: INCREMENT,
    payload: counter,
  };
}

export function decrementCounter(counter) {
  return {
    type: DECREMENT,
    payload: counter,
  };
}
