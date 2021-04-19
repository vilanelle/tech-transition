import { backend, devOps, frontend, projectManager, qa, uxUi } from '../../data/detail-page/learn/index';
import { Learn } from '../../data/detail-page/learn/LearnInterfaces';
import { ProfessionId } from '../../data/home-page/ITProfessions';

export const getData = (professionId: ProfessionId): Learn => {
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
      return {} as Learn;
  }
};

export const capitalizeFirst = (text: string): string => text[0].toUpperCase() + text.substring(1);
