import React, { useState } from 'react';
import { Card, Tabs } from '@material-ui/core';
import styled from 'styled-components';

import { TabPanel } from './TabPanel';
import { StyledTab } from './StyledTab';
import { JobsTab } from './JobsTab';
import { LearnTab } from './LearnTab';
import { ResourcesTab } from './ResourcesTab';
import { categories } from './TabCategories';

const StyledTabs = styled(Tabs)`
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

export const TabsContainer: React.FC<TabProps> = ({
  learn,
  jobs,
  resources,
}) => {
  const [choosesCategory, setChoosesCategory] = useState(0);

  const TabsHeading = categories.map((category: any, id: number) => {
    return (
      <StyledTab
        key={category.name}
        text={category.text}
        chosenTab={choosesCategory}
        index={id}
        onClick={setChoosesCategory}
      />
    );
  });

  const TabPanels = categories.map((category, id) => {
    let tabContent;
    switch (category.name) {
    case 'jobs': {
      tabContent = <JobsTab content={jobs} />;
      break;
    } case 'learn': {
      tabContent = <LearnTab content={learn} />;
      break;
    } case 'resources': {
      tabContent = <ResourcesTab content={resources} />;
      break;
    } default: throw new Error('Wrong category name!');
    }
    return (
      <TabPanel value={choosesCategory} index={id} key={category.name}>
        {tabContent}
      </TabPanel>
    );
  });

  return (
    <StyledCard>
      <StyledTabs
        indicatorColor="primary"
        value={choosesCategory}
      >
        {TabsHeading}
      </StyledTabs>
      {TabPanels}
    </StyledCard>
  );
};
