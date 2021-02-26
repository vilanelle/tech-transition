import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { MainContainer } from '../layout/components/MainContainer';
import { Tabs } from './components/tabs/Tabs';

import { ITProfessions } from '../data/ITProfessions';
import { ProfessionCard } from '../home-page/components/ProfessionCard';

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

export const DetailPage: React.FC<{}> = () => {
  const { professionId } = useParams<{professionId: string}>();
  const profession = ITProfessions.find(p => p.id === professionId);
  return (
    <>
      {profession && (
        <MainContainer>
          <div>{profession.title}</div>
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
            <Tabs
              categories={profession.categories}
              profession={profession}
            />
          </TabContainer>
        </MainContainer>
      )}
    </>
  );
};
