import { backend, devOps, frontend, projectManager, qa, uxUi } from '../../data/detail-page/resources/index';
import { ProfessionId } from '../../data/home-page/ITProfessions';
import { Resources } from '../../data/detail-page/resources/ResourcesInterfaces';

export const getData = (professionId: ProfessionId): Resources => {
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
      return {} as Resources;
  }
};
