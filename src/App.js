import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Routes = React.lazy(() => import('./Routes'));

const App = () => (
  <BrowserRouter>
    <React.Suspense>
      <Routes />
    </React.Suspense>
  </BrowserRouter>
);

export default App;
