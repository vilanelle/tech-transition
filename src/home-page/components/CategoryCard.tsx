import React from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import styled from 'styled-components';

const CategoryCardContainer = styled(Card)`
  width: 100%;
  display: flex;
  align-items: center;

 :hover {
   opacity: 0.8;
 }   
`;

const CardHeaderContainer = styled(CardHeader)`
 width: 100%;
`;

const AvatarContainer = styled(Avatar)<{backgroundColor: string}>`
 margin-right: 1em;
 background-color: ${props => props.backgroundColor};
`;

type CardProps = {
  title: string;
  description: string;
  avatarSrc: string;
  avatarBackground: string;
  clickHandler: () => any;
};

export const CategoryCard: React.FC<CardProps> = ({
  title,
  description,
  avatarSrc,
  avatarBackground,
  clickHandler,
}) => {
  return (
    <CategoryCardContainer
      onClick={clickHandler}
    >
      <CardHeaderContainer
        title={title}
        subheader={description}
      />
      <AvatarContainer src={avatarSrc} backgroundColor={avatarBackground} />
    </CategoryCardContainer>
  );
};
