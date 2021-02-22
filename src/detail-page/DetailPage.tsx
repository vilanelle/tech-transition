import React from 'react';

import { MainContainer } from '../layout/components/MainContainer';
import { ProfessionInterface } from '../data/ITProfessions';
import { BackButton } from './BackButton';

type DetailProps = {
  profession: ProfessionInterface;
}

export const DetailPage: React.FC<DetailProps> = ({
  profession,
}) => (
  <MainContainer>
    <div>{profession.title}</div>
  </MainContainer>
);
