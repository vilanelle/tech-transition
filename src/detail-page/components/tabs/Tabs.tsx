import { Card, Tabs as MuiTabs } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Category } from '../../../data/detail-page/Tabs/tabsInterfaces';
import { JobsTab } from '../JobsTab';
import { LearnTab } from '../LearnTab';
import { ResourcesTab } from '../ResourcesTab';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

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
  professionId: string;
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
      return <Redirect to="/404" />;
  }
};

export const Tabs: React.FC<TabProps> = ({ professionId }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);

  const { path, url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (categories.length === 0) {
        import(`../../../data/detail-page/tabs/${professionId}.ts`)
          .then(response => setCategories(response[professionId]))
          .catch(() => history.push('/'));
    }
  }, [categories, professionId]);

  const handleTabClicked = (category: Category, tabIndex: number) => {
    setActiveTab(tabIndex);
    history.push(`${url}/${category.name}`);
  };
  const syncTabWithPath = (categoryIdFromPath: string) => {
    const selectedCategoryIndex = categories.findIndex(category => category.id === categoryIdFromPath);
    const index = selectedCategoryIndex === -1 ? 0 : selectedCategoryIndex;
    setActiveTab(index);
  };

  return (
    <>
      { (categories.length !== 0)
      && (
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
      )}
    </>
  );
};
