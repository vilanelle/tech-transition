import React from 'react';

import { MainContainer } from '../layout/components/MainContainer';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { GridContainer } from './components/GridContainer';
import { CategoryCard } from './components/CategoryCard';
import { cards } from './data/data';

export const HomePage: React.FC<{}> = () => (
  <MainContainer>
    <Header />
    <Description />
    <GridContainer>
      {cards.map(({ title, description, color, icon }) => (
        <CategoryCard
          title={title}
          description={description}
          avatarSrc={icon}
          avatarBackground={color}
          clickHandler={() => console.log('Click')}
        />
      ))}
    </GridContainer>
  </MainContainer>
);
