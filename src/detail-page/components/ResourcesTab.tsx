import React from 'react';
import styled from 'styled-components';
import { Accordion } from './accordion/Accordion';
import { MockResources } from '../../data/mock-data/mockResources';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { ResourcesType } from '../../data/detail-page/resources/resourcesInterfaces';
import { ResourcesTypeNames } from '../../data/detail-page/resources/resourcesTypeNames';
import ResourcesIcon from '../../icons/resources.svg';

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
    <div>
      {Object.keys(MockResources).map((key) => {
        const resourceTitle = ResourcesTypeNames[key as ResourcesType];

        const areResources = MockResources[key as ResourcesType].length !== 0;

        return (
          areResources && (
            <Accordion
              key={resourceTitle}
              header={resourceTitle}
              list={MockResources[key as ResourcesType]}
            />
          )
        );
      })}
    </div>
    <ImageContainer>
      <Image
        src={ResourcesIcon}
        alt="Girl lying on the floor working on her laptop"
      />
    </ImageContainer>
  </TabContainer>
);
