import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter.action';
import Counter from '../../components/Counter.component';

export const mapDispatchToProps = dispatch => {
  return {
    increment: counter => {
      dispatch(incrementCounter(counter + 1));
    },
    decrement: counter => {
      dispatch(decrementCounter(counter - 1));
    },
  };
};

export const mapStateToProps = store => {
  return {
    count: store.countStore.counter,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
