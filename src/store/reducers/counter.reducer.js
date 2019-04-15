// Gather required actions types
import { INCREMENT, DECREMENT } from '../action-types/counter.action.types';

// Define Initial state
export const initialCounterState = { counter: 0 };

// Define the reducer
export default function reducer(state = initialCounterState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
