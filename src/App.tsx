import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { HomePage } from './home-page/HomePage';
import { theme } from './layout/theme';

export const App: React.FC<{}> = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
