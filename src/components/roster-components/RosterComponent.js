import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FullRoster } from './FullRosterComponent';
import { Player } from './PlayerComponent';

export const Roster = () => (
  <Switch>
    <Route exact path="/roster" component={FullRoster} />
    <Route path="/roster/:number" component={Player} />
  </Switch>
);
