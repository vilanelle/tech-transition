import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { backend, devOps, frontend, projectManager, qa, uxUi } from '../data/detail-page/descriptions/index';
import { ITProfessions, ProfessionKey } from '../data/home-page/ITProfessions';
import { MainContainer } from '../layout/components/MainContainer';
import { NoMatch404 } from '../layout/components/NoMatch404';
import { ProfessionCard } from '../shared/components/ProfessionCard';
import { BackButton } from './BackButton';
import { Tabs } from './components/tabs/Tabs';

export const TabContainer = styled('div')`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(4, 0, 0)};
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: ${({ theme }) => theme.spacing(3, 0, 0)};
  }
`;

const getData = (professionId: ProfessionKey) => {
  switch (professionId) {
    case 'frontend':
      return frontend;
    case 'backend':
      return backend;
    case 'devops':
      return devOps;
    case 'projectmanager':
      return projectManager;
    case 'qa':
      return qa;
    case 'uxui':
      return uxUi;
    default:
      return '';
  }
};

export const DetailPage: React.FC<{}> = () => {
  const { professionId } = useParams<{ professionId: ProfessionKey }>();
  const [detailDescription, setDetailDescription] = useState<string>(getData(professionId));

  const history = useHistory();

  const profession = ITProfessions.find(p => p.id === professionId);

  return (
    <>
      {(profession && detailDescription) ? (
        <MainContainer>
          <BackButton />
          <ProfessionCard
            key={profession.id}
            title={profession.title}
            description={detailDescription}
            avatarSrc={profession.icon}
            avatarBackground={profession.color}
          />
          <TabContainer>
            <Tabs
              professionId={professionId}
            />
          </TabContainer>
        </MainContainer>
      ) : <NoMatch404 />}
    </>
  );
};
