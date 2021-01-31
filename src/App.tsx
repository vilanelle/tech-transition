import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DemoContainer } from './demo/DemoContainer';
import { theme } from './layout/theme';
import { ITProfessions } from './ITProfessions';

export const App: React.FC<{}> = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <DemoContainer />
          </Route>
          {ITProfessions.map((r) => (
            <Route exact path={`/${r}`} key={r}>
              <p>Works {r}</p>
            </Route>
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  </MuiThemeProvider>
);
