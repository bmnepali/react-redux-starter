import * as React from 'react';

// Load Component
import App from '../App';

describe('App Component', () => {
  describe('render testing', () => {
    it('renders App component without any error', () => {
      shallow(<App />);
    });

    it('matches the snapshot', () => {
      const wrapper = shallow(<App />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
