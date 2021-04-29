import { ResourceType } from './ResourceTypeNames';

export interface Resource {
  title: string;
  description: string | null;
  url: string;
  id: string;
}

export type Resources = Record<ResourceType, Resource[]>;
