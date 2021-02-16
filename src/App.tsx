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

const FakeComponent = () => <p>Routing works</p>;
const FakeComponent2 = () => <p>Routing works2</p>;

export const App: React.FC<{}> = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/frontend" component={FakeComponent} />
              <Route exact path="/backend" component={FakeComponent2} />
            </Switch>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};
