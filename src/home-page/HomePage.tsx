import React from 'react';

import { MainContainer } from '../layout/components/MainContainer';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { GridContainer } from './components/GridContainer';
import { CategoryCard } from './components/CategoryCard';
import { cards } from './data/data';

export const HomePage: React.FC<{}> = () => {
  return (
    <MainContainer>
      <Header />
      <Description />
      <GridContainer>
        {cards.map(({ title, description, color, icon }) => {
          return (
            <CategoryCard
              key={title}
              title={title}
              description={description}
              avatarSrc={icon}
              avatarBackground={color}
              clickHandler={() => { return true; }}
            />
          );
        })}
      </GridContainer>
    </MainContainer>
  );
};
