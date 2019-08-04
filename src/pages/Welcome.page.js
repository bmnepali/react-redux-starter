import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../store/containers/counter.container';

const Welcome = () => (
  <div className="container">
    <section className="text-center">
      <Counter />
    </section>
  </div>
);

Welcome.propTypes = {
  title: PropTypes.string,
};

export default Welcome;
