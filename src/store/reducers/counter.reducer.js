// Gather required actions types
import { INCREMENT, DECREMENT } from '../action-types/counter.action.types';

// Define Initial state
export const initialCounterState = { counter: 0 };

// Define the reducer
export default function reducer(state = initialCounterState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: action.payload,
      };
    case DECREMENT:
      return {
        counter: action.payload,
      };
    default:
      return state;
  }
}
