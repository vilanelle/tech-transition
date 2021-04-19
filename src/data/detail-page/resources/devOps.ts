import { v4 as uuid } from 'uuid';
import { Resources } from './ResourcesInterfaces';

export const devOps: Resources = {
  books: [
    {
      title: 'Bash Guide for Beginners',
      url: 'https://tldp.org/LDP/Bash-Beginners-Guide/html/',
      id: uuid(),
      description: null,
    },
    {
      title: 'CI/CD with Kubernetes',
      url: 'https://www.cncf.io/free-ebook-ci-cd-with-kubernetes/',
      id: uuid(),
      description: null,
    },
  ],
  courses: [
    {
      title: 'DevOps Culture and Mindset',
      url: 'https://www.coursera.org/learn/devops-culture-and-mindset',
      id: uuid(),
      description: null,
    },
    {
      title: 'Introduction to DevOps and Site Reliability Engineering',
      url: 'https://www.edx.org/course/introduction-to-devops-and-site-reliability-engineering',
      id: uuid(),
      description: 'A course from edx covering principles & practices of DevOps',
    },
    {
      title: 'Shell Scripting Tutorial for Beginners',
      url: 'https://www.youtube.com/playlist?list=PLS1QulWo1RIYmaxcEqw5JhK3b-6rgdWO_',
      id: uuid(),
      description: 'Youtube video course',
    },
  ],
  platforms: [
    {
      title: 'Coursera',
      url: 'https://www.coursera.org',
      id: uuid(),
      description: null,
    },
    {
      title: 'Udacity',
      url: 'https://www.udacity.com',
      id: uuid(),
      description: null,
    },
    {
      title: 'edx',
      url: 'https://www.edx.org',
      id: uuid(),
      description: null,
    },
  ],
  tools: [],
  communities: [
    {
      title: 'SysOps/DevOps Polska',
      url: 'https://www.sysopspolska.pl/',
      description:
        'Polish-language community that provides meetups, workshops and and facebook groups.',
      id: uuid(),
    },
    {
      title: 'Azuronet',
      url: 'https://www.meetup.com/pl-PL/Azuronet-NET-Azure-Meetup/',
      description: 'Community for fans of Microsoft tehnology',
      id: uuid(),
    },
  ],
  portalsAndPodcasts: [
    {
      title: 'Arrested Devops',
      url: 'https://www.arresteddevops.com/',
      description:
        'Arrested DevOps is the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness.',
      id: uuid(),
    },
    {
      title: 'DZone',
      url: 'https://dzone.com/',
      description: null,
      id: uuid(),
    },
  ],
  games: [],
  varia: [],
};
