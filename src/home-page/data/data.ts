import backendIcon from '../../icons/backend.svg';
import devopsIcon from '../../icons/devops.svg';
import frontendIcon from '../../icons/frontend.svg';
import projectIcon from '../../icons/project_manager.svg';
import qaIcon from '../../icons/qa.svg';
import uxIcon from '../../icons/ux_ui.svg';

export const cards = [
  {
    title: 'Frontend',
    description:
      'A frontend engineer works on those parts of web apps you actually see',
    color: '#bee5e4',
    icon: frontendIcon,
  },
  {
    title: 'Backend',
    description:
      'A backend engineer handles communication between user and database, processes and saves data',
    color: '#ff85be',
    icon: backendIcon,
  },
  {
    title: 'UX/UI',
    description:
      'A UX/UI designs app to make them good-looking and user-friendly',
    color: '#7ec2ff',
    icon: uxIcon,
  },
  {
    title: 'QA',
    description: 'A QA tests software to detect any bugs and errors',
    color: '#fdf580',
    icon: qaIcon,
  },
  {
    title: 'DevOps',
    description:
      'A DevOps creates and maintains infrastructure that software runs on',
    color: '#d99cff',
    icon: devopsIcon,
  },
  {
    title: 'Project Manager',
    description:
      'Project managers plan, monitor, control and organize projects',
    color: '#aafa87',
    icon: projectIcon,
  },
];
