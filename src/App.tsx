import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './layout/theme';
import { RenderRoutes } from './routes';

export const App: React.FC<{}> = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      {/* Replace with actual content */}
      <RenderRoutes />
    </ThemeProvider>
  </MuiThemeProvider>
);
