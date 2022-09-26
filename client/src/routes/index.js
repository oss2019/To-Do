import React from 'react';
import { Route, Routes as Switch } from 'react-router';

import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        {/* <Route path="/" component={About}/> */}
    </Switch>
  );
};

export default Routes;
