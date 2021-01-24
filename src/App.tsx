import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DemoContainer } from './demo/DemoContainer';
import { theme } from './layout/theme';


export const App: React.FC<{}> = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      {/* Replace with actual content */}
      <DemoContainer />
    </ThemeProvider>
  </MuiThemeProvider>
);
