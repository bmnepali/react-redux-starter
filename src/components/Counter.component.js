import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
  return (
    <article>
      <h2>Counter Example</h2>
      <p>{props.count}</p>
      <div className="btn-group" role="group" aria-label="Action Buttons">
        <button type="button" className="btn btn-success" onClick={() => props.increment(props.count)}>
          +
        </button>
        <button type="button" className="btn btn-info" onClick={() => props.decrement(props.count)}>
          -
        </button>
      </div>
    </article>
  );
};

Counter.propTypes = {
  count: PropTypes.any.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Counter;
