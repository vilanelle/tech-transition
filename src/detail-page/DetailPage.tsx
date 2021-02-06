import React from 'react';

import { MainContainer } from '../layout/components/MainContainer';

type DetailProps = {
  profession: string;
  description: string;
}

export const DetailPage: React.FC<DetailProps> = ({
  profession,
  description,
}) => (
  <MainContainer>
    <div>{profession}</div>
    <div>{description}</div>
  </MainContainer>
);
