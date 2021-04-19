export type ResourcesType = 'books' | 'courses' | 'platforms' | 'tools' | 'communities' | 'portalsAndPodcasts' | 'games' | 'varia';

export interface Resource {
  title: string;
  description: string | null;
  url: string;
  id: string;
}

export type Resources = Record<ResourcesType, Resource[]>;
