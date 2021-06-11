import React from 'react';
import styled from 'styled-components';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { LearnList } from './LearnList';
import { DevOpsChart } from './charts/DevOpsChart';
import { FrontEndChart } from './charts/FrontEndChart';

const TabContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  grid-gap: 2em;
  width: 100%;
`;

const PROFESSION_CHARTS = {
  frontend: <FrontEndChart />,
  backend: null,
  uxui: null,
  qa: null,
  devops: <DevOpsChart />,
  projectmanager: null,
};

interface LearnProps {
  professionId: ProfessionId;
}

const StyledChartWrapper = styled('div')`
  margin: 0 auto;
`;

export const LearnTab: React.FC<LearnProps> = ({ professionId }) => (
  <TabContainer>
    <LearnList professionId={professionId} />
    <StyledChartWrapper>{PROFESSION_CHARTS[professionId]}</StyledChartWrapper>
  </TabContainer>
);
