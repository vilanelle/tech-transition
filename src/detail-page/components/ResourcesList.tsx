import React from 'react';
import { Accordion } from './accordion/Accordion';
import { getData } from './ResourcesList.helpers';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { ResourceType, ResourceTypeNames } from '../../data/detail-page/resources/ResourceTypeNames';

interface ResourcesListProps {
  professionId: ProfessionId;
}

export const ResourcesList: React.FC<ResourcesListProps> = ({
  professionId,
}) => {
  const resourcesData = getData(professionId);
  return (
    <div>
      {Object.keys(resourcesData).map((resourceType, index) => {
        const resourceTitle = ResourceTypeNames[resourceType as ResourceType];
        const areResourcesAvailable = resourcesData[resourceType as ResourceType].length !== 0;

        return (
          areResourcesAvailable && (
            <Accordion
              key={resourceTitle}
              header={resourceTitle}
              resources={resourcesData[resourceType as ResourceType]}
              panelNumber={index}
            />
          )
        );
      })}
    </div>
  );
};
