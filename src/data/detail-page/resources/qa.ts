import { v4 as uuid } from 'uuid';
import { Resources } from './ResourcesInterfaces';

export const qa: Resources = {
  books: [
    {
      title: 'The Art of Software Testing',
      url: 'https://www.amazon.com/Art-Software-Testing-Glenford-Myers/dp/1118031962',
      id: uuid(),
      description: 'The classic work on software testing',
    },
    {
      title: 'Agile Testing: A Practical Guide for Testers and Agile Teams',
      url: 'https://www.amazon.com/Agile-Testing-Practical-Guide-Testers/dp/0321534468',
      id: uuid(),
      description: null,
    },
    {
      title: 'Beautiful Testing: Leading Professionals Reveal How They Improve Software',
      url: 'https://www.amazon.com/Beautiful-Testing-Professionals-Software-Practice/dp/0596159811',
      id: uuid(),
      description: null,
    },
  ],
  courses: [
    {
      title: 'Testelka',
      url: 'https://testelka.pl',
      id: uuid(),
      description: null,
    },
  ],
  platforms: [],
  tools: [],
  communities: [
    {
      title: 'WarszawQA',
      url: 'http://www.warszawqa.pl',
      id: uuid(),
      description: 'Warsaw Quality Assurance Group organizes meetups for local qa community ',
    },
    {
      title: 'KraQA',
      url: 'https://kraqa.pl',
      id: uuid(),
      description: null,
    },
    {
      title: 'Gildia Testerów [pl]',
      url: 'https://www.facebook.com/GildiaTesterow/',
      id: uuid(),
      description: 'Polish Facebook community',
    },
  ],
  portalsAndPodcasts: [
    {
      title: 'testerzy.pl',
      url: 'https://testerzy.pl',
      id: uuid(),
      description: null,
    },
  ],
  games: [],
  varia: [],
};
