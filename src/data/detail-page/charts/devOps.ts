import { Chart, ChartDataItem, ChartColor } from './chartInterfaces';

interface DevOpsChartDataItem extends ChartDataItem {
  color: ChartColor;
}

type DevOpsChart = Omit<Chart, 'data'> & { data: DevOpsChartDataItem[]};

const data: DevOpsChartDataItem[] = [
  {
    label: 'aws',
    value: 32,
    color: 'purple',
  },
  {
    label: 'Azure',
    value: 20,
    color: 'blue',
  },
  {
    label: 'Google Cloud',
    value: 9,
    color: 'pink',
  },
  {
    label: 'Alibaba Cloud',
    value: 6,
    color: 'green',
  },
  {
    label: 'IBM Cloud',
    value: 5,
    color: 'yellow',
  },
  {
    label: 'salesforce',
    value: 3,
    color: 'red',
  },
  {
    label: 'Tencent Cloud',
    value: 2,
    color: 'bronze',
  },
  {
    label: 'Oracle Cloud',
    value: 2,
    color: 'cyan',
  },
];

export const devOps: DevOpsChart = {
  data,
  title: 'Market share of cloud infrastructure service providers Q4 2020',
  source: {
    description: 'statista.com',
    link:
      'https://www.statista.com/chart/18819/worldwide-market-share-of-leading-cloud-infrastructure-service-providers/',
  },
  labelText: '% of market',
};
