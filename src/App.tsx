import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { DemoContainer } from './demo/DemoContainer';
import { theme } from './layout/theme';

export const App: React.FC<{}> = () => (
  <ThemeProvider theme={theme}>
    <DemoContainer />
  </ThemeProvider>
);
