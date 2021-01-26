import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { DemoContainer } from './demo/DemoContainer';
import { theme } from './layout/theme';
import { CategoryCard } from './CategoryCard';

export const App: React.FC<{}> = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {/* Replace with actual content */}
        <DemoContainer />
        <CategoryCard
          title="Frontend"
          description="Frontend development is awesome!!!"
          avatarSrc=""
        />
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
