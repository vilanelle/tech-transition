import React from 'react';
import styled from 'styled-components';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { LearnList } from './LearnList';
import { DevOpsChart } from './charts/DevOpsChart';

const TabContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  grid-gap: 2em;
  width: 100%;
`;

const PROFESSION_CHARTS = {
  frontend: null,
  backend: null,
  uxui: null,
  qa: null,
  devops: <DevOpsChart />,
  projectmanager: null,
};
interface LearnProps {
  professionId: ProfessionId;
}

export const LearnTab: React.FC<LearnProps> = ({ professionId }) => (
  <TabContainer>
    <LearnList professionId={professionId} />
    <div>{PROFESSION_CHARTS[professionId]}</div>
  </TabContainer>
);
