import { v4 as uuid } from 'uuid';
import { Resources } from './ResourcesInterfaces';

export const backend: Resources = {
  books: [],
  courses: [],
  platforms: [],
  tools: [],
  communities: [
    {
      title: 'Warszawa Java User Group - WJUG',
      url: 'https://www.meetup.com/pl-PL/Warszawa-JUG/',
      id: uuid(),
      description: 'Warsaw Java community',
    },
    {
      title: 'Wroclaw PHP',
      url: 'https://www.meetup.com/pl-PL/Wroclaw-PHP/',
      id: uuid(),
      description: null,
    },
    {
      title: 'wroc.py',
      url: 'https://www.meetup.com/pl-PL/wrocpy/',
      id: uuid(),
      description: null,
    },
  ],
  portalsAndPodcasts: [],
  games: [
    {
      title: 'codewars',
      url: 'https://www.codewars.com',
      id: uuid(),
      description: null,
    },
    {
      title: 'HackerRank',
      url: 'https://www.hackerrank.com',
      id: uuid(),
      description: null,
    },
    {
      title: 'CodeChef',
      url: 'https://www.codechef.com',
      id: uuid(),
      description: null,
    },
  ],
  varia: [],
};
