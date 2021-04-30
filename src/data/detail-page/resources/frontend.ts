import { v4 as uuid } from 'uuid';
import { Resources } from './ResourcesInterfaces';

export const frontend: Resources = {
  books: [
    {
      title: 'You don\'t know JS',
      url: 'https://github.com/getify/You-Dont-Know-JS',
      id: uuid(),
      description: null,
    },
    {
      title: 'Eloquent JavaScript',
      url: 'https://eloquentjavascript.net',
      id: uuid(),
      description: null,
    },
  ],
  courses: [
    {
      title: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org',
      id: uuid(),
      description:
        'Interactive learning web platform including various front-end topics with online exercises and projects',
    },
    {
      title: 'The Odin Project',
      url: 'https://www.theodinproject.com',
      id: uuid(),
      description: null,
    },
    {
      title: 'Full stack open',
      url: 'https://fullstackopen.com/en/',
      id: uuid(),
      description: null,
    },
  ],
  platforms: [
    {
      title: 'Udemy',
      url: 'https://www.udemy.com',
      id: uuid(),
      description: null,
    },
  ],
  tools: [],
  communities: [],
  portalsAndPodcasts: [],
  games: [
    {
      title: 'Codewars',
      url: 'https://www.codewars.com',
      id: uuid(),
      description: null,
    },
    {
      title: 'CSSBattle',
      url: 'https://cssbattle.dev',
      id: uuid(),
      description: null,
    },
  ],
  varia: [],
};
