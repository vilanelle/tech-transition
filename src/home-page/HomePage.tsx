import React from 'react';

import { MainContainer } from '../layout/components/MainContainer';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { GridContainer } from './components/GridContainer';
import { CategoryCard } from './components/CategoryCard';
import { ITProfessions } from '../data/ITProfessions';

export const HomePage: React.FC<{}> = () => (
  <MainContainer>
    <Header />
    <Description />
    <GridContainer>
      {ITProfessions.map(({ title, description, color, icon, id }) => (
        <CategoryCard
          key={id}
          title={title}
          description={description}
          avatarSrc={icon}
          avatarBackground={color}
          clickHandler={() => true}
        />
      ))}
    </GridContainer>
  </MainContainer>
);
