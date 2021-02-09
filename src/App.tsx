import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { HomePage } from './home-page/HomePage';
import { theme } from './layout/theme';
import { ITProfessions } from './data/ITProfessions';

export const App: React.FC<{}> = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            {ITProfessions.map(({ route, id }) => (
              <Route exact path={`/${route}`} key={id}>
                <p>Works {route}</p>
              </Route>
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
