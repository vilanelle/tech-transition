import backendIcon from '../icons/backend.svg';
import devopsIcon from '../icons/devops.svg';
import frontendIcon from '../icons/frontend.svg';
import projectIcon from '../icons/project_manager.svg';
import qaIcon from '../icons/qa.svg';
import uxIcon from '../icons/ux_ui.svg';

export type ProfessionKey = 'frontend' | 'backend' | 'uxui' | 'qa' | 'devops' | 'projectmanager';

export type Category = {
  name: string;
  text: string;
}

export interface Profession {
  id: ProfessionKey;
  title: string;
  description: string;
  color: ProfessionKey;
  icon: string;
  route: ProfessionKey;
  categories: Category[];
}

const categories: Category[] = [
  {
    name: 'learn',
    text: 'What do I learn',
  },
  {
    name: 'jobs',
    text: 'Jobs',
  },
  {
    name: 'resources',
    text: 'Useful Resources',
  },
];

export const ITProfessions: Profession[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description:
      'A frontend engineer works on those parts of web apps you actually see',
    color: 'frontend',
    icon: frontendIcon,
    route: 'frontend',
    categories,
  },
  {
    id: 'backend',
    title: 'Backend',
    description:
      'A backend engineer handles communication between user and database, processes and saves data',
    color: 'backend',
    icon: backendIcon,
    route: 'backend',
    categories,
  },
  {
    id: 'uxui',
    title: 'UX/UI',
    description:
      'A UX/UI designs app to make them good-looking and user-friendly',
    color: 'uxui',
    icon: uxIcon,
    route: 'uxui',
    categories,
  },
  {
    id: 'qa',
    title: 'QA',
    description: 'A QA tests software to detect any bugs and errors',
    color: 'qa',
    icon: qaIcon,
    route: 'qa',
    categories,
  },
  {
    id: 'devops',
    title: 'DevOps',
    description:
      'A DevOps creates and maintains infrastructure that software runs on',
    color: 'devops',
    icon: devopsIcon,
    route: 'devops',
    categories,
  },
  {
    id: 'projectmanager',
    title: 'Project Manager',
    description:
      'Project managers plan, monitor, control and organize projects',
    color: 'projectmanager',
    icon: projectIcon,
    route: 'projectmanager',
    categories,
  },
];
