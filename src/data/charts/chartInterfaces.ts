import { ProfessionId } from '../home-page/ITProfessions';

export interface ChartDataInterface {
  data: ChartDataItem[];
  title: string;
  source: ChartSource | null;
  labelText: string | null;
  type: ProfessionId;
}

export interface ChartSource {
  link: string;
  description: string;
}

export interface ChartDataItem {
  label: string;
  value: number;
  color: ChartColor;
}

export type ChartColor =
  | 'purple'
  | 'blue'
  | 'pink'
  | 'green'
  | 'yellow'
  | 'red'
  | 'bronze'
  | 'cyan';
