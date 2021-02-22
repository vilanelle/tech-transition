import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> 6aa9537adb73b5b15cb382c64bf38fc8f0ddf00d
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { HomePage } from './home-page/HomePage';
import { theme } from './layout/theme';
<<<<<<< HEAD
import { ITProfessions } from './ITProfessions';
=======
import { DetailPage } from './detail-page/DetailPage';
import { ITProfessions } from './data/ITProfessions';
>>>>>>> 6aa9537adb73b5b15cb382c64bf38fc8f0ddf00d

export const App: React.FC<{}> = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
<<<<<<< HEAD
            {ITProfessions.map((r) => (
              <Route exact path={`/${r}`} key={r}>
                <p>Works {r}</p>
=======
            {ITProfessions.map((profession) => (
              <Route exact path={`/details/${profession.route}`} key={profession.id}>
                <DetailPage profession={profession} />
>>>>>>> 6aa9537adb73b5b15cb382c64bf38fc8f0ddf00d
              </Route>
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
