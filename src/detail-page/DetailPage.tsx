import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ITProfessions } from '../data/home-page/ITProfessions';
import { MainContainer } from '../layout/components/MainContainer';
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

export const DetailPage: React.FC<{}> = () => {
  const [detailDescription, setDetailDescription] = useState<string>('');

  const history = useHistory();

  const { professionId } = useParams<{ professionId: string }>();
  const profession = ITProfessions.find(p => p.id === professionId);

  useEffect(() => {
    if (professionId) {
      import(`../data/detail-page/descriptions/${professionId}.ts`)
        .then(response => setDetailDescription(response[professionId]))
        .catch(() => history.push('/'));
    }
  }, [professionId]);

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
      )
        : null}
    </>
  );
};
