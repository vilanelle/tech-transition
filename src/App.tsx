import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ITProfessions } from './data/home-page/ITProfessions';
import { DetailPage } from './detail-page/DetailPage';
import { HomePage } from './home-page/HomePage';
import { NoMatch404 } from './layout/components/NoMatch404';
import { theme } from './layout/theme';

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
            <Route path="*" component={NoMatch404} />
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
