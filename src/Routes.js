import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
const Welcome = React.lazy(() => import('./pages/Welcome.page'));

const Routes = () => {
  return (
    <Switch>
      <React.Suspense fallback={<p>Please wait</p>}>
        <Route exact path="/" component={Welcome} />
      </React.Suspense>
    </Switch>
  );
};

export default Routes;
