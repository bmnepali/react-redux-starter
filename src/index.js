import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={store}>
    <React.Suspense fallback={<p>Please wait ...</p>}>
      <App />
    </React.Suspense>
  </Provider>,
  document.getElementById('react-redux-starter-app'),
);
