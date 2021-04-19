import { v4 as uuid } from 'uuid';
import { Resources } from './ResourcesInterfaces';

export const uxUi: Resources = {
  books: [
    {
      title: 'Don\'t Make Me Think',
      url: 'https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515',
      id: uuid(),
      description: null,
    },
    {
      title: '100 Things Every Designer Needs to Know About People',
      url: 'https://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0136746918',
      id: uuid(),
      description: null,
    },
    {
      title: 'Show Your Work!: 10 Ways to Share Your Creativity and Get Discovered',
      url: 'https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X',
      id: uuid(),
      description: null,
    },
  ],
  courses: [],
  platforms: [
    {
      title: 'dribble',
      url: 'https://dribbble.com',
      id: uuid(),
      description: null,
    },
    {
      title: 'Behance',
      url: 'https://www.behance.net',
      id: uuid(),
      description: null,
    },
  ],
  tools: [],
  communities: [],
  portalsAndPodcasts: [
    {
      title: 'High Resolution',
      url: 'https://www.highresolution.design',
      id: uuid(),
      description: 'Video podcast about product design & design thinking by Bobby Ghoshal & Jared Erondu',
    },
    {
      title: 'The Nose Knows',
      url: 'https://nosecast.com',
      id: uuid(),
      description: 'Design podcast available on iTunes, Spotify or Google Music',
    },
    {
      title: 'Webdesigner news',
      url: 'https://www.webdesignernews.com',
      id: uuid(),
      description: 'Portal with curated news about design, ux & ui',
    },
  ],
  games: [],
  varia: [],
};
