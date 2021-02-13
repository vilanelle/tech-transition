import React, { useState } from 'react';
import { Card, Tabs as MuiTabs } from '@material-ui/core';
import styled from 'styled-components';

import { TabPanel } from './tab-components/TabPanel';
import { Tab } from './tab-components/Tab';
import { ResourcesTab } from './ResourcesTab';
import { JobsTab } from './JobsTab';
import { LearnTab } from './LearnTab';
import { Category } from '../../data/TabCategories';

const StyledTabs = styled(MuiTabs)`
  border-bottom: 1px solid ${props => { return props.theme.palette.text.disabled; }};
  color: inherit;
`;

const StyledCard = styled(Card)`
  width: 100%;
`;

/* For now TabContainer receive props from its parent container
with categories and learn, jobs and resources content.
Because it isn't determined how they will look like it's type is unknown.
It should be change when it will be determined */
interface TabProps {
  categories: Category[];
  learn: unknown;
  jobs: unknown;
  resources: unknown;
}

export const Tabs: React.FC<TabProps> = ({
  categories,
  learn,
  jobs,
  resources,
}) => {
  const [chosenCategory, setChosenCategory] = useState(0);

  const getTabContent = (categoryName: String) => {
    switch (categoryName) {
    case 'jobs':
      return <JobsTab content={jobs} />;
    case 'learn':
      return <LearnTab content={learn} />;
    case 'resources':
      return <ResourcesTab content={resources} />;
    default: throw new Error('Wrong category name!');
    }
  };

  return (
    <StyledCard>
      <StyledTabs
        indicatorColor="primary"
        value={chosenCategory}
      >
        {categories.map((category, index) => {
          return (
            <Tab
              key={category.name}
              text={category.text}
              chosenTab={chosenCategory}
              index={index}
              onClick={setChosenCategory}
            />
          );
        })}
      </StyledTabs>
      {categories.map((category, id) => {
        return (
          <TabPanel value={chosenCategory} index={id} key={category.name}>
            {getTabContent(category.name)}
          </TabPanel>
        );
      })}
    </StyledCard>
  );
};
