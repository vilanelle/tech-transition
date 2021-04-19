import React from 'react';
import styled from 'styled-components';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import ResourcesIcon from '../../icons/resources.svg';
import { ResourcesList } from './ResourcesList';

interface ResourcesTabProps {
  professionId: ProfessionId;
}

const TabContainer = styled('div')`
  align-self: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: 3fr 1fr;
  }
`;

const ImageContainer = styled('div')`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Image = styled('img')`
  max-width: 75%;
`;

export const ResourcesTab: React.FC<ResourcesTabProps> = ({ professionId }) => (
  <TabContainer>
    <ResourcesList professionId={professionId} />
    <ImageContainer>
      <Image
        src={ResourcesIcon}
        alt="Girl lying on the floor working on her laptop"
      />
    </ImageContainer>
  </TabContainer>
);
