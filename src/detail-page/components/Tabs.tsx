import React, { useState } from 'react';
import { Card, Tabs as MuiTabs } from '@material-ui/core';
import styled from 'styled-components';

import { TabPanel } from './tab-components/TabPanel';
import { Tab } from './tab-components/Tab';
import { categories } from './tab-components/TabCategories';
import { ResourcesTab } from './ResourcesTab';
import { JobsTab } from './JobsTab';
import { LearnTab } from './LearnTab';

const StyledTabs = styled(MuiTabs)`
  border-bottom: 1px solid ${props => { return props.theme.palette.text.disabled; }};
  color: inherit;
`;

const StyledCard = styled(Card)`
  width: 100%;
`;

/* For now TabContainer receive props from its parent container
with what to learn, jobs and resources.
Because it isn't determined how they will look like it's type is unknown.
It should be change when it will be determined */
interface TabProps {
  learn: unknown;
  jobs: unknown;
  resources: unknown;
}

export const Tabs: React.FC<TabProps> = ({
  learn,
  jobs,
  resources,
}) => {
  const [chosenCategory, setChosenCategory] = useState(0);

  const TabsHeading = categories.map((category, index) => {
    return (
      <Tab
        key={category.name}
        text={category.text}
        chosenTab={chosenCategory}
        index={index}
        onClick={setChosenCategory}
      />
    );
  });

  const TabPanels = categories.map((category, id) => {
    let tabContent;
    switch (category.name) {
    case 'jobs':
      tabContent = <JobsTab content={jobs} />;
      break;
    case 'learn':
      tabContent = <LearnTab content={learn} />;
      break;
    case 'resources':
      tabContent = <ResourcesTab content={resources} />;
      break;
    default: throw new Error('Wrong category name!');
    }
    return (
      <TabPanel value={chosenCategory} index={id} key={category.name}>
        {tabContent}
      </TabPanel>
    );
  });

  return (
    <StyledCard>
      <StyledTabs
        indicatorColor="primary"
        value={chosenCategory}
      >
        {TabsHeading}
      </StyledTabs>
      {TabPanels}
    </StyledCard>
  );
};
