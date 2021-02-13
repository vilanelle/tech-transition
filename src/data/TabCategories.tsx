// This should be add to data/ItProfessions file
export type Category = {
  name: string;
  text: string;
}

export const categories: Category[] = [
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
