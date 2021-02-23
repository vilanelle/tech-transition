import React from 'react';
import { useHistory } from 'react-router-dom';

import { MainContainer } from '../layout/components/MainContainer';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { GridContainer } from './components/GridContainer';
import { ProfessionCard } from './components/ProfessionCard';
import { ITProfessions } from '../data/ITProfessions';

export const HomePage: React.FC<{}> = () => {
  const history = useHistory();
  const handleClick = (route: string) => {
    history.push(`/details/${route}`);
  };
  return (
    <MainContainer>
      <Header />
      <Description />
      <GridContainer>
        {ITProfessions.map(({ title, description, color, icon, id, route }) => (
          <ProfessionCard
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
