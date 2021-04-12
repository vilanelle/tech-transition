import { backend, devOps, frontend, projectManager, qa, uxUi } from '../../data/detail-page/learn/index';
import { Learn } from '../../data/detail-page/learn/LearnInterfaces';
import { ProfessionKey } from '../../data/home-page/ITProfessions';

export const getData = (professionId: ProfessionKey): Learn => {
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
