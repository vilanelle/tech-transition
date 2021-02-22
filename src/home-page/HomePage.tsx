import React from 'react';
import { useHistory } from 'react-router-dom';

import { MainContainer } from '../layout/components/MainContainer';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { GridContainer } from './components/GridContainer';
import { CategoryCard } from './components/CategoryCard';
import { ITProfessions } from '../data/ITProfessions';

export const HomePage: React.FC<{}> = () => {
  return (
    <MainContainer>
      <Header />
      <Description />
      <GridContainer>
        {/* Fill with actual content */}
      </GridContainer>
    </MainContainer>
  );
};
