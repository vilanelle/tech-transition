export enum ResourceTypeNames {
  books = 'Books',
  courses = 'Online courses',
  platforms = 'Platforms',
  tools = 'Useful tools',
  communities = 'Communities',
  portalsAndPodcasts = 'Portals and Podcasts',
  games = 'Games & Coding Challenges',
  varia = 'Varia'
}

export type ResourceType = keyof typeof ResourceTypeNames;
