import React from 'react';
import { useHistory } from 'react-router-dom';

import { MainContainer } from '../layout/components/MainContainer';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { GridContainer } from './components/GridContainer';
import { CategoryCard } from './components/CategoryCard';
import { ITProfessions } from '../data/ITProfessions';

export const HomePage: React.FC<{}> = () => {
  const history = useHistory();
  const handleClick = (route: string) => {
    history.push(`${process.env.PUBLIC_URL}/details/${route}`);
  };
  // eslint-disable-next-line
  console.log(`${process.env.PUBLIC_URL}`);
  return (
    <MainContainer>
      <Header />
      <Description />
      <GridContainer>
        {ITProfessions.map(({ title, description, color, icon, id, route }) => (
          <CategoryCard
            key={id}
            title={title}
            description={description}
            avatarSrc={icon}
            avatarBackground={color}
            clickHandler={handleClick}
            route={route}
          />
        ))}
      </GridContainer>
    </MainContainer>
  );
};
