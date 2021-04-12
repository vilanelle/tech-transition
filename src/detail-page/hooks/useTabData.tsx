import React, { useState } from 'react';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import { backend, devOps, frontend, projectManager, qa, uxUi } from '../../data/detail-page/tabs/index';
import { Category } from '../../data/detail-page/tabs/tabsInterfaces';
import { ProfessionKey } from '../../data/home-page/ITProfessions';
import { JobsTab } from '../components/JobsTab';
import { LearnTab } from '../components/LearnTab';
import { ResourcesTab } from '../components/ResourcesTab';

const getData = (professionId: ProfessionKey) => {
  switch (professionId) {
    case 'frontend':
      return frontend;
    case 'backend':
      return backend;
    case 'devops':
      return devOps;
    case 'projectmanager':
      return projectManager;
    case 'qa':
      return qa;
    case 'uxui':
      return uxUi;
    default:
      return [];
  }
};

export const useTabData = (professionId: ProfessionKey) => {
  const [activeTab, setActiveTab] = useState(0);
  const categories = getData(professionId);

  const { path, url } = useRouteMatch();
  const history = useHistory();

  const getTabContent = (categoryName: String) => {
    switch (categoryName) {
      case 'jobs':
        return <JobsTab professionId={professionId} />;
      case 'learn':
        return <LearnTab professionId={professionId} />;
      case 'resources':
        return <ResourcesTab professionId={professionId} />;
      default:
        return <Redirect to="/404" />;
    }
  };

  const handleTabClicked = (category: Category, tabIndex: number) => {
    setActiveTab(tabIndex);
    history.push(`${url}/${category.name}`);
  };
  const syncTabWithPath = (categoryIdFromPath: string) => {
    const selectedCategoryIndex = categories.findIndex(category => category === categoryIdFromPath);
    const index = selectedCategoryIndex === -1 ? 0 : selectedCategoryIndex;
    setActiveTab(index);
  };

  return { activeTab, categories, url, path, history, handleTabClicked, syncTabWithPath, getTabContent };
};
