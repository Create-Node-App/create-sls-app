import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import {
  AppContainer,
  HomePage
} from 'playground/containers';

const AppRouter = () => (
  <BrowserRouter>
    <AppContainer>
      <Switch>
        <Route path='/' component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </AppContainer>
  </BrowserRouter>
);

export default AppRouter;
