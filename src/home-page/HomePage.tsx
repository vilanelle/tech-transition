import React from 'react';

import { MainContainer } from '../layout/components/MainContainer';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { GridContainer } from './components/GridContainer';

export const HomePage: React.FC<{}> = () => (
  <MainContainer>
    <Header />
    <Description />
    <GridContainer>
      {/* Fill with actual content */}
    </GridContainer>
  </MainContainer>
);
