import React from 'react';

import { MainContainer } from '../layout/components/MainContainer';
import { ITProfession } from '../ITProfessions';

type DetailProps = {
  profession: ITProfession;
}

export const DetailPage: React.FC<DetailProps> = ({
  profession,
}) => (
  <MainContainer>
    <div>{profession.name}</div>
  </MainContainer>
);
