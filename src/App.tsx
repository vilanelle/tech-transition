import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { DemoContainer } from './demo/DemoContainer';
import { theme } from './layout/theme';

import { HomePageLayout } from './layout/HomePageLayout';

export const App: React.FC<{}> = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {/* Replace with actual content */}
        <HomePageLayout />
        {/* <DemoContainer /> */}
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
