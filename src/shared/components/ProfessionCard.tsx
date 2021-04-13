import { Avatar, Card, CardHeader } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { ProfessionKey } from '../../data/home-page/ITProfessions';

const StyledProfessionCard = styled(Card)<{ $isClickable: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'auto')};
  :hover {
    opacity: ${({ $isClickable }) => ($isClickable ? 0.8 : 1)};
  }
`;

const StyledCardHeader = styled(CardHeader)`
  width: 100%;
`;

const StyledAvatar = styled(Avatar)<{ background: ProfessionKey }>`
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
  isClickable = false,
}) => (
  <StyledProfessionCard $isClickable={isClickable}>
    <StyledCardHeader title={title} subheader={description} />
    <StyledAvatar src={avatarSrc} background={avatarBackground} />
  </StyledProfessionCard>
);
