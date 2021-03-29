import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { MainContainer } from '../layout/components/MainContainer';
import { Tabs } from './components/tabs/Tabs';

import { ITProfessions } from '../data/ITProfessions';
import { BackButton } from './BackButton';
import { ProfessionCard } from '../shared/components/ProfessionCard';
import { FrontendLearnChart } from './components/FrontendLearnChart';

export const TabContainer = styled('div')`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(4, 0, 0)};
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: ${({ theme }) => theme.spacing(3, 0, 0)};
  }
`;

const PROFESSION_CHARTS = {
  frontend: <FrontendLearnChart />,
  backend: null,
  uxui: null,
  qa: null,
  devops: null,
  projectmanager: null,
};

export const DetailPage: React.FC<{}> = () => {
  const { professionId } = useParams<{ professionId: string }>();
  const profession = ITProfessions.find(p => p.id === professionId);
  return (
    <>
      {profession && (
        <MainContainer>
          <ProfessionCard
            key={profession.id}
            title={profession.title}
            // TODO: change to longer profession description after
            // adding profession data
            description={profession.description}
            avatarSrc={profession.icon}
            avatarBackground={profession.color}
          />
          <TabContainer>
            <BackButton />
            <Tabs categories={profession.categories} profession={profession} />
            {PROFESSION_CHARTS[profession.id]}
          </TabContainer>
        </MainContainer>
      )}
    </>
  );
};
