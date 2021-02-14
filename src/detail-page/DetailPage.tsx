import React from 'react';
import styled from 'styled-components';

import { MainContainer } from '../layout/components/MainContainer';
import { ProfessionInterface } from '../data/ITProfessions';

import { Tabs } from './components/tabs/Tabs';

type DetailProps = {
  profession: ProfessionInterface;
}

export const TabContainer = styled('div')`
    max-width: 960px;
    width: 80%;
    margin: 2em auto 0;
    padding-bottom: 2em;

    ${props => props.theme.breakpoints.down('sm')} {
      width: 90%;
      margin-top: 1.5em;
    }
`;

export const DetailPage: React.FC<DetailProps> = ({
  profession,
}) => (
  <MainContainer>
    <div>{profession.title}</div>
    <TabContainer>
      <Tabs categories={profession.categories} learn="What to learn" jobs="jobs" resources="resources" />
    </TabContainer>
  </MainContainer>
);
