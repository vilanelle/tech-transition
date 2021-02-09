import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { HomePage } from './home-page/HomePage';
import { theme } from './layout/theme';
import { ITProfessions } from './ITProfessions';

export const App: React.FC<{}> = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router basename="/">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              {ITProfessions.map(r => {
                return (
                  <Route exact path={`/${r}`} key={r}>
                    <p>Works {r}</p>
                  </Route>
                );
              })}
            </Switch>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};
