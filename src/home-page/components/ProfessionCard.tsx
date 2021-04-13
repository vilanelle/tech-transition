import React from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import styled from 'styled-components';
import { ProfessionKey } from '../../data/home-page/ITProfessions';

const CategoryCardContainer = styled(Card)`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer; 
  
  :hover {
    opacity: 0.8;
  }
`;

const CardHeaderContainer = styled(CardHeader)`
  width: 100%;
`;

const AvatarContainer = styled(Avatar)<{ background: ProfessionKey }>`
  margin-right: 1em;
  background-color: ${({ background, theme }) => theme.palette.professions[background].main};
  padding: .75em;
`;

type CardProps = {
  title: string;
  description: string;
  avatarSrc: string;
  avatarBackground: ProfessionKey;
  clickHandler: (route: string) => void;
  route: string;
};

export const ProfessionCard: React.FC<CardProps> = ({
  title,
  description,
  avatarSrc,
  avatarBackground,
  clickHandler,
  route,
}) => (
  <CategoryCardContainer onClick={() => clickHandler(route)}>
    <CardHeaderContainer title={title} subheader={description} />
    <AvatarContainer src={avatarSrc} background={avatarBackground} />
  </CategoryCardContainer>
);
