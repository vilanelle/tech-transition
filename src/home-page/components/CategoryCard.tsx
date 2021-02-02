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

const AvatarContainer = styled(Avatar)`
 margin-right: 1em;
`;

type CardProps = {
  title: string;
  description: string;
  avatarSrc: string;
};

export const CategoryCard: React.FC<CardProps> = ({
  title,
  description,
  avatarSrc,
}) => {
  return (
    <CategoryCardContainer
      onClick={() => {
        alert('onClick action placeholder');
      }}
    >
      <CardHeaderContainer
        title={title}
        subheader={description}
      />
      <AvatarContainer src={avatarSrc} />
    </CategoryCardContainer>
  );
};
