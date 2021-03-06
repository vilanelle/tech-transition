import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { HomePage } from './home-page/HomePage';
import { theme } from './layout/theme';
import { DetailPage } from './detail-page/DetailPage';
import { ITProfessions } from './data/home-page/ITProfessions';

const DefaultDetailsPagePath = `/details/${ITProfessions[0].route}`;

export const App: React.FC<{}> = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Router basename={`${process.env.PUBLIC_URL}`}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Redirect exact path="/details" to={DefaultDetailsPagePath} />
            <Route path="/details/:professionId" component={DetailPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
