import React, { useState } from 'react';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import { backend, devOps, frontend, projectManager, qa, uxUi } from '../../data/detail-page/tabs/index';
import { Category, CategoryId } from '../../data/detail-page/tabs/tabsInterfaces';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { JobsTab } from '../components/JobsTab';
import { LearnTab } from '../components/LearnTab';
import { ResourcesTab } from '../components/ResourcesTab';

const getData = (professionId: ProfessionId): CategoryId[] => {
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

export interface UseTabDataValue {
  activeTab: number;
  categories: CategoryId[];
  url: string;
  path: string;
  handleTabClicked: (category: Category, tabIndex: number) => void;
  syncTabWithPath: (categoryIdFromPath: CategoryId) => void;
  getTabContent: (categoryName: CategoryId) => JSX.Element;
}

export const useTabData = (professionId: ProfessionId): UseTabDataValue => {
  const { path, url } = useRouteMatch();

  const [activeTab, setActiveTab] = useState(0);
  const categories = getData(professionId);

  const history = useHistory();

  const getTabContent = (categoryName: CategoryId) => {
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
  const syncTabWithPath = (categoryIdFromPath: CategoryId) => {
    const selectedCategoryIndex = categories.findIndex(category => category === categoryIdFromPath);
    const index = selectedCategoryIndex === -1 ? 0 : selectedCategoryIndex;
    setActiveTab(index);
  };

  return { activeTab, categories, url, path, handleTabClicked, syncTabWithPath, getTabContent };
};
