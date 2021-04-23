import React from 'react';
import { Accordion } from './accordion/Accordion';
import { getData } from './ResourcesList.helpers';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { ResourcesType } from '../../data/detail-page/resources/ResourcesInterfaces';
import { ResourcesTypeNames } from '../../data/detail-page/resources/ResourcesTypeNames';

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
        const resourceTitle = ResourcesTypeNames[resourceType as ResourcesType];
        const areResourcesAvailable = resourcesData[resourceType as ResourcesType].length !== 0;

        return (
          areResourcesAvailable && (
            <Accordion
              key={resourceTitle}
              header={resourceTitle}
              resources={resourcesData[resourceType as ResourcesType]}
              panelNumber={index}
            />
          )
        );
      })}
    </div>
  );
};
