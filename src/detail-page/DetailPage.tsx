import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { backend, devOps, frontend, projectManager, qa, uxUi } from '../data/detail-page/descriptions/index';
import { ITProfessions, ProfessionId } from '../data/home-page/ITProfessions';
import { MainContainer } from '../layout/components/MainContainer';
import { NoMatch404 } from '../layout/components/NoMatch404';
import { ProfessionCard } from '../shared/components/ProfessionCard';
import { FrontendLearnChart } from './components/FrontendLearnChart';
import { BackButton } from './BackButton';
import { Tabs } from './components/tabs/Tabs';

export const TabContainer = styled('div')`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(4, 0, 0)};

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
}

const getData = (professionId: ProfessionId): string => {
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
  const { professionId } = useParams<{ professionId: ProfessionId }>();
  const detailDescription = getData(professionId);

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
            {PROFESSION_CHARTS[profession.id]}
          </TabContainer>
        </MainContainer>
      ) : <NoMatch404 />}
    </>
  );
};
