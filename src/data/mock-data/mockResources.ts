import { v4 as uuid } from 'uuid';
import { Resources } from '../detail-page/resources/ResourcesInterfaces';

export const MockResources: Resources = {
  books: [],
  courses: [
    {
      title: 'DevOps Culture and Mindset',
      url: 'https://www.coursera.org/learn/devops-culture-and-mindset',
      id: uuid(),
      description: null,
    },
  ],
  platforms: [
    {
      title: 'Coursera',
      url: 'https://www.coursera.org',
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
      description:
        null,
      id: uuid(),
    },
  ],
  games: [],
  varia: [],
};
