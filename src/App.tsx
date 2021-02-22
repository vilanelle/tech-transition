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
import { ITProfessions } from './data/ITProfessions';
import { BackButton } from './detail-page/BackButton';

export const App: React.FC<{}> = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              {ITProfessions.map((r) => {
                return (
                  <Route exact path={`/${r.title}`} key={r.title}>
                    <BackButton />
                    <p>Works {r.title}</p>
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
