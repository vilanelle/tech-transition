import React from 'react';
import { Accordion } from './accordion/Accordion';
import { MockResources } from '../../data/mock-data/mockResources';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { ResourcesType } from '../../data/detail-page/resources/ResourcesInterfaces';
import { ResourcesTypeNames } from '../../data/detail-page/resources/ResourcesTypeNames';
import { getData } from './ResourcesList.helpers';

interface ResourcesListProps {
  professionId: ProfessionId;
}

export const ResourcesList: React.FC<ResourcesListProps> = ({
  professionId,
}) => {
  const resourcesData = getData(professionId);
  return (
    <div>
      {Object.keys(resourcesData).map((resourceType) => {
        const resourceTitle = ResourcesTypeNames[resourceType as ResourcesType];
        const areResources = resourcesData[resourceType as ResourcesType].length !== 0;

        return (
          areResources && (
            <Accordion
              key={resourceTitle}
              header={resourceTitle}
              list={resourcesData[resourceType as ResourcesType]}
            />
          )
        );
      })}
    </div>
  );
};
