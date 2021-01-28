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
import { ITRoleRouter } from './common/ITRoleRouter';

export const App: React.FC<{}> = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <DemoContainer />
          </Route>
          <ITRoleRouter path="/backend" proffesion="backend" />
          <ITRoleRouter path="/frontend" proffesion="frontend" />
        </Switch>
      </Router>
    </ThemeProvider>
  </MuiThemeProvider>
);
