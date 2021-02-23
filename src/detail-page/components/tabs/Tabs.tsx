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

const TabsContainer = styled(Card)`
  width: 100%;
`;

interface TabProps {
  categories: Category[];
  profession: Profession;
}

/* Mock data until we determine the shape and place of tabs state */
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
  const [activeTab, setActiveTab] = useState(0);
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const handleTabClicked = (category: Category, tabIndex: number) => {
    setActiveTab(tabIndex);
    history.push(`${url}/${category.name}`);
  };
  const syncTabWithPath = (categoryIdFromPath: string) => {
    const selectedCategoryIndex = categories.findIndex((category) => category.id === categoryIdFromPath);
    const index = selectedCategoryIndex === -1 ? 0 : selectedCategoryIndex;
    setActiveTab(index);
  };

  return (
    <>
      <TabsContainer>
        <StyledTabs indicatorColor="primary" value={activeTab}>
          {categories.map((category, index) => (
            <Tab
              key={category.name}
              text={category.text}
              chosenTab={activeTab}
              index={index}
              handleClick={(tabIndex: number) => handleTabClicked(category, tabIndex)}
            />
          ))}
        </StyledTabs>
        <Switch>
          <Redirect exact from="/details/:professionId" to={`${url}/learn`} />
          <Route exact path={`${path}/:categoryId`}>
            <TabPanel
              getTabContent={getTabContent}
              syncTabWithPath={syncTabWithPath}
            />
          </Route>
        </Switch>
      </TabsContainer>
    </>
  );
};
