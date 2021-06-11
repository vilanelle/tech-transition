// import { ChartDataInterface } from './chartInterfaces';
// use Chart DataInterface after adding data
import { ChartDataInterface, ChartDataItem } from './chartInterfaces';

const data: ChartDataItem[] = [
  {
    label: 'React',
    value: 80,
    color: 'purple',
  },
  {
    label: 'Vue',
    value: 49,
    color: 'purple',
  },
  { label: 'Svelte', value: 15, color: 'purple' },
  { label: 'Angular', value: 56, color: 'purple' },
  { label: 'Preact', value: 13, color: 'purple' },
  { label: 'Ember', value: 11, color: 'purple' },
  { label: 'LitElement', value: 5, color: 'purple' },
  { label: 'Alpine.js', value: 3, color: 'purple' },
  { label: 'Stimulus', value: 1, color: 'purple' },
];

export const frontend: ChartDataInterface = {
  data,
  title: 'Usage of FE frameworks in 2020',
  source: {
    description: 'State of JS 2020',
    link: 'https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/',
  },
  labelText: '% of usage',
  type: 'frontend',
};
