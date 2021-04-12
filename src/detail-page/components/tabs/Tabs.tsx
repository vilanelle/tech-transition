import { Card, Tabs as MuiTabs } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { availableCategories } from '../../../data/detail-page/tabs/availableCategories';
import { ProfessionKey } from '../../../data/home-page/ITProfessions';
import { useTabData } from '../../hooks/useTabData';
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
  professionId: ProfessionKey;
}

export const Tabs: React.FC<TabProps> = ({ professionId }) => {
  const { activeTab, categories, url, path, handleTabClicked, syncTabWithPath, getTabContent } = useTabData(professionId);

  return (
    <>
      { (categories.length !== 0)
      && (
        <TabsContainer>
          <StyledTabs indicatorColor="primary" value={activeTab}>
            {categories.map((category, index) => (
              <Tab
                key={availableCategories[category].name}
                text={availableCategories[category].text}
                chosenTab={activeTab}
                index={index}
                handleClick={(tabIndex: number) => handleTabClicked(availableCategories[category], tabIndex)}
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
