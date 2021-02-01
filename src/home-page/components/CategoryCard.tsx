import React from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import styled from 'styled-components';

const CategoryCardContainer = styled('div')`
  margin: 10px auto;
  min-width: 100%;
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
    <CategoryCardContainer>
      <Card
        onClick={() => {
          alert('onClick action placeholder');
        }}
      >
        <CardHeader
          title={title}
          subheader={description}
          action={(
            <Avatar
              aria-label="avatar"
              src={avatarSrc}
            />
          )}
        />
      </Card>
    </CategoryCardContainer>
  );
};
