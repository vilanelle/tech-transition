export interface Chart {
  data?: ChartDataItem[];
  type?: string;
  title?: string;
  source?: {
    link: string;
    description: string;
  };
  labelText?: string;
}

export interface ChartDataItem {
  label: string;
  value: number;
}

export type ChartColor = 'purple' | 'blue' | 'pink' | 'green' | 'yellow' | 'red' | 'bronze' | 'cyan';
