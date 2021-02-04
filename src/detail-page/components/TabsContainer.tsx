import React, { useState } from 'react';
import { Card, Tabs } from '@material-ui/core';
import styled from 'styled-components';
import { TabPanel } from './TabPanel';
import { StyledTab } from './StyledTab';
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

  const TabsContent = categories.map((category, id) => {
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
    return (
      <TabPanel value={choosesCategory} index={id} key={category.name}>
        {/* Should be replace with actual content */}
        {category.name}
      </TabPanel>
    );
  });

  return (
    <StyledCard>
      <StyledTabs
        indicatorColor="primary"
        value={choosesCategory}
      >
        {TabsContent}
      </StyledTabs>
      {TabPanels}
    </StyledCard>
  );
};
