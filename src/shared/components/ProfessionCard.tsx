import React from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import styled from 'styled-components';
import { ProfessionKey } from '../../data/ITProfessions';

const ProfessionCardContainer = styled(Card)<{ $isClickable: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'auto')};
  :hover {
    opacity: ${({ $isClickable }) => ($isClickable ? 0.8 : 1)};
  }
`;

const CardHeaderContainer = styled(CardHeader)`
  width: 100%;
`;

const AvatarContainer = styled(Avatar)<{ background: ProfessionKey }>`
  margin-right: 1em;
  background-color: ${({ background, theme }) => theme.palette.professions[background].main};
  padding: 0.35em;
`;

type ProfessionCardProps = {
  title: string;
  description: string;
  avatarSrc: string;
  avatarBackground: ProfessionKey;
  isClickable?: boolean;
};

export const ProfessionCard: React.FC<ProfessionCardProps> = ({
  title,
  description,
  avatarSrc,
  avatarBackground,
  isClickable,
}) => (
  <ProfessionCardContainer $isClickable={isClickable !== undefined}>
    <CardHeaderContainer title={title} subheader={description} />
    <AvatarContainer src={avatarSrc} background={avatarBackground} />
  </ProfessionCardContainer>
);
