import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainContainer } from '../layout/components/MainContainer';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { GridContainer } from './components/GridContainer';
import { ProfessionCard } from '../shared/components/ProfessionCard';
import { ITProfessions } from '../data/ITProfessions';

const StyledLink = styled(Link)`
  display: flex;
  align-items: stretch;
  text-decoration: none;
  :active {
    color: inherit;
  }
`;

export const HomePage: React.FC<{}> = () => (
  <MainContainer>
    <Header />
    <Description />
    <GridContainer>
      {ITProfessions.map(({ title, description, color, icon, id, route }) => (
        <StyledLink to={`/details/${route}`} key={id}>
          <ProfessionCard
            isClickable
            key={id}
            title={title}
            description={description}
            avatarSrc={icon}
            avatarBackground={color}
          />
        </StyledLink>
      ))}
    </GridContainer>
  </MainContainer>
);
