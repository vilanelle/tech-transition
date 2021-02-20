import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { Card, Tabs as MuiTabs } from '@material-ui/core';
import styled from 'styled-components';

import { TabPanel } from './TabPanel';
import { Tab } from './Tab';
import { Category, Profession } from '../../../data/ITProfessions';
import { JobsTab } from '../JobsTab';
import { LearnTab } from '../LearnTab';
import { ResourcesTab } from '../ResourcesTab';

const StyledTabs = styled(MuiTabs)`
  border-bottom: 1px solid
    ${props => props.theme.palette.text.disabled};
  color: inherit;

  a {
    text-decoration: none;
    color: inherit;
  }
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
  profession: Profession;
}

const tabList = {
  learn: 'What to learn',
  jobs: 'jobs',
  resources: 'resources',
};

const getTabContent = (categoryName: String) => {
  switch (categoryName) {
    case 'jobs':
      return <JobsTab content={tabList.jobs} />;
    case 'learn':
      return <LearnTab content={tabList.learn} />;
    case 'resources':
      return <ResourcesTab content={tabList.resources} />;
    default:
      throw new Error('Wrong category name!');
  }
};

export const Tabs: React.FC<TabProps> = ({ categories }) => {
  const [chosenCategory, setChosenCategory] = useState(0);
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const handleTabClicked = (category: Category, tabIndex: number) => {
    setChosenCategory(tabIndex);
    history.push(`${url}/${category.name}`);
  };

  return (
    <>
      <StyledCard>
        <StyledTabs indicatorColor="primary" value={chosenCategory}>
          {categories.map((category, index) => (
            <Tab
              key={category.name}
              text={category.text}
              chosenTab={chosenCategory}
              index={index}
              handleClick={(tabIndex: number) => handleTabClicked(category, tabIndex)}
            />
          ))}
        </StyledTabs>
      </StyledCard>
      <Switch>
        <Redirect exact from="/details/:professionId" to={`${url}/learn`} />
        <Route exact path={`${path}/:categoryId`}>
          <TabPanel getTabContent={getTabContent} />
        </Route>
      </Switch>
    </>
  );
};
