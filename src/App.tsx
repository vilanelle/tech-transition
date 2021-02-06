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
import { DetailPage } from './detail-page/DetailPage';

export const App: React.FC<{}> = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            {ITProfessions.map((profession) => (
              <Route exact path={`/details/${profession.name}`} key={profession.name}>
                <DetailPage profession={profession.name} description={profession.description} />
              </Route>
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
