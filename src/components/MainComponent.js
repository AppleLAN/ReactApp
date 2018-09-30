import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './home-components/HomeComponent';
import { Roster } from './roster-components/RosterComponent';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/roster" component={Roster} />
    </Switch>
  </main>
);
